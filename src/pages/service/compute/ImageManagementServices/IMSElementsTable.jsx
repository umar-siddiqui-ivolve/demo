import React from 'react';
import {
    Table,
    Icon,
    Switch,
    Radio,
    Form,
    Divider,
    Menu,
    Dropdown,
    Tag,
    Button,
} from 'antd';
import IMSDetails from './IMSDetails';
import styles from '../../ElementsTable.css';
import { connect } from 'dva';
import router from 'umi/router';

Icon.setTwoToneColor('#4c98bf');

class IMSElementsTable extends React.Component {
    constructor(props) {
        super(props);
        this.onRow = this.onRow.bind(this);
        this.onSelectClick = this.onSelectClick.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);

        this.state = {
            bordered: false,

            rowSelection: {},
            scroll: undefined,
            size: 'default',
            selectedRowKeys: [],

            menu: (
                <Menu>
                    <Menu.Item key="0">
                        <a>Start</a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a>Stop</a>
                    </Menu.Item>
                    <Menu.Item key="2">Pause</Menu.Item>
                </Menu>
            ),

            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    width: 150,
                },
                {
                    title: 'Visibility',
                    dataIndex: 'visibility',
                    key: 'visibility',
                    width: 150,
                },

                {
                    title: 'Minimum disk',
                    dataIndex: 'minimumdisk',
                    key: 'minimumdisk',
                    width: 150,
                },

                {
                    title: 'Minimum RAM',
                    dataIndex: 'minimumram',
                    key: 'minimumram',
                    width: 150,
                },

                {
                    title: 'Actions',
                    dataIndex: 'actions',
                    key: 'actions',
                    width: 150,
                },
            ],

            data: [],

            hasData: true,
        };
    }
    displayImageData() {
        if (typeof this.props.imagesList !== 'undefined') {
            if (this.state.data.length !== 0) {
                this.setState({ data: [] });
            }

            for (var i = 0; i < this.props.imagesList['length']; i++) {
                var x = this.props.imagesList[i];

                this.state.data.push({
                    key: this.props.imagesList[i]['id'],
                    name: this.props.imagesList[i]['name'],
                    visibility: this.props.imagesList[i]['visibility'],
                    protected: this.props.imagesList[i]['is_protected'],
                    minimumdisk: this.props.imagesList[i]['min_disk'],
                    minimumram: this.props.imagesList[i]['min_ram'],
                    architecture: this.props.imagesList[i]['architecture'],

                    description: (
                        <IMSDetails
                            eachImageDetail={
                                this.props.imagesList[i]['description']
                            }
                        />
                    ),
                });
            }
        }
    }
    onSelectChange(selectedRowKeys) {
        this.setState(state => {
            return { ...state, selectedRowKeys };
        });
    }

    createNewItem(value) {
        this.props.dispatch({
            type: `evs/createVolumeFromImage`,
            payload: value,
        });
        router.push('../storage/elastic-volume-services/create');
    }

    onRow(record, rowIndex) {
        const { dispatch } = this.props;
        return {
            onClick(e) {
                e.preventDefault();

                if (
                    e.target.innerHTML !== record.name &&
                    e.target.innerHTML !== record.actions
                ) {
                    dispatch({
                        type: 'ims/selectedRows',
                        payload: [
                            {
                                ...record,
                            },
                        ],
                    });
                } else {
                    router.push(
                        `image-management-services/show-image?image_id=${record.key}`
                    );
                }
            },
            onDoubleClick: event => {},
            onContextMenu: event => {},
            onMouseEnter: event => {},
            onMouseLeave: event => {},
        };
    }

    onSelectClick(record, state) {
        const { dispatch } = this.props;

        dispatch({
            type: 'ims/selectedRows',
            payload: [
                {
                    ...record,
                },
            ],
        });
    }

    onSelectAll(value, records) {
        const { dispatch } = this.props;

        dispatch({
            type: 'ims/sdAllRows',
            payload: {
                records,
                value,
            },
        });
    }

    render() {
        const rowSelection = {
            selectedRowKeys: this.props.selectedRowKeys,
            onSelect: this.onSelectClick,
            onSelectAll: this.onSelectAll,
            selections: this.props.imagesList.map(items =>
                items.visibility === 'public' ? false : true
            ),
        };

        const { state } = this;
        const data = this.props.imagesList.map(listItem => {
            return {
                key: listItem['id'],
                id: listItem['id'],
                name: listItem['name'],
                visibility: listItem['visibility'],

                minimumdisk: listItem['min_disk'] + ' GB',
                minimumram: listItem['min_ram'] + ' GB',

                actions: (
                    <Button
                        type="primary"
                        style={{
                            fontFamily: `Open Sans`,
                            fontWeight: `600`,
                        }}
                        onClick={() => this.createNewItem(listItem['id'])}
                    >
                        Create Volume
                    </Button>
                ),
                description: (
                    <IMSDetails eachImageDetail={listItem['description']} />
                ),
            };
        });

        return (
            <div>
                <Table
                    size="small"
                    loading={this.props.loading}
                    columns={this.state.columns}
                    dataSource={data}
                    pagination={{ pageSize: 10 }}
                />
            </div>
        );
    }
}

export default connect(state => {
    return {
        imageList: state.ims,
        fetchingImageList: state.loading.effects['ims/update'],
    };
})(IMSElementsTable);
