import React, { Component } from 'react';
import {
    List,
    Card,
    Descriptions,
    Statistic,
    Row,
    Col,
    Label,
    Icon,
    Typography,
    Divider,
} from 'antd';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

class CardList extends Component {
    state = {};
    render() {
        const flavorData = this.props.flavorsList.map(listItem => {
            return {
                key: listItem['id'],
                id: listItem['id'],
                name: listItem['name'],
                vcpus: listItem['vcpus'],
                ram: listItem['ram'] + ' MB',
            };
        });
        return (
            <List
                loading={this.props.loading}
                grid={{ gutter: 30, column: 3 }}
                dataSource={flavorData}
                renderItem={item => (
                    <List.Item>
                        <Card
                            hoverable
                            style={{
                                borderRadius: `7px`,
                                backgroundColor: '#f7f7f7',
                            }}
                            bodyStyle={{
                                borderRadius: `7px`,
                            }}
                        >
                            <Row align="middle">
                                <Row>
                                    <Col span={12}>
                                        <Typography.Title
                                            style={{
                                                fontSize: '0.9em',
                                                paddingRight: '100px',
                                            }}
                                        >
                                            {item.name}
                                        </Typography.Title>
                                    </Col>

                                    <Col span={12}>
                                        <Statistic
                                            valueStyle={{
                                                fontSize: '0.9em',
                                                fontWeight: '100',
                                            }}
                                            value={'100 SAR'}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}>
                                        <Statistic
                                            style={{
                                                paddingRight: '40px',
                                                paddingTop: '20px',
                                            }}
                                            valueStyle={{
                                                fontSize: '1.1em',
                                                fontWeight: '100',
                                                marginLeft: '0px',
                                            }}
                                            title="VCPUs"
                                            value={item.vcpus}
                                            prefix={
                                                <Icon
                                                    type="thunderbolt"
                                                    style={{ color: '#06597F' }}
                                                />
                                            }
                                        />
                                    </Col>

                                    <Col span={12}>
                                        <Statistic
                                            style={{
                                                paddingRight: '40px',
                                                paddingTop: '20px',
                                            }}
                                            valueStyle={{
                                                fontSize: '1.1em',
                                                fontWeight: '100',
                                                marginLeft: '0px',
                                            }}
                                            title="RAM"
                                            value={item.ram}
                                            prefix={
                                                <Icon
                                                    type="database"
                                                    style={{ color: '#06597F' }}
                                                />
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Row>
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}
export default CardList;
