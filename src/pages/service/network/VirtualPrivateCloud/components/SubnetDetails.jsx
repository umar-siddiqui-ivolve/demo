import React, { PureComponent, useState } from 'react';
import {
    Collapse,
    Icon,
    Row,
    Col,
    Spin,
    Divider,
    Descriptions,
    Badge,
    Card,
    Popconfirm,
    Form,
    Select,
    Typography,
    Tag,
    Input,
} from 'antd';
import { connect } from 'dva';
import { Empty, Button } from 'antd';
import moment from 'moment';
import { getPageQuery } from '@/utils/utils';
import FormRow from '@/pages/service/components/FormRow';

import CreateEVS from '@/pages/service/storage/ElasticVolumeServices/CreateEVS';
import SubnetCreation from '@/pages/service/network/VirtualPrivateCloud/components/SubnetCreation';
import { elementType } from 'prop-types';
import SubnetDetailPanel from './SubnetDetailPanel';

const { Panel } = Collapse;

const antIcon = (
    <Icon type="loading" style={{ fontSize: 15, opacity: `0.7` }} spin />
);

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

@connect(({ vpc, loading }) => {
    return {
        deletingSubnet: loading.effects['vpc/deleteSubnet'],
        vpc,
    };
})
@Form.create()
class SubnetDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.showCreateNewSubnet = this.showCreateNewSubnet.bind(this);
        this.state = {
            showCreateNewSubnet: false,
            updateSubnetState: '',
            freezeCollapse: false,
        };
    }

    showCreateNewSubnet() {
        this.props.dispatch({
            type: 'drawer/showDrawer',
            payload: {
                componentPath:
                    'network/VirtualPrivateCloud/components/SubnetCreation',
                mountedData: { drawerName: 'Create New Subnet' },
            },
        });
    }

    confirm(volume, event) {
        event.stopPropagation();

        const values = {
            subnet_id: volume.id,
            network_id: getPageQuery().network_id,
        };

        this.props.dispatch({
            type: `vpc/deleteSubnet`,
            payload: values,
        });
    }

    updateSubnet(value, e) {
        if (this.state.freezeCollapse) {
            e.stopPropagation();
        }
        this.setState(state => {
            return {
                ...state,
                updateSubnetState: value,
            };
        });
    }

    onCancel() {
        this.setState({
            updateSubnetState: '',
        });
    }
    stopcollapse() {
        if (!this.state.freezeCollapse || !this.state.updateSubnetState) {
            this.setState({
                freezeCollapse: !this.state.freezeCollapse,
            });
        }
        if (this.state.updateSubnetState) {
            this.setState({ freezeCollapse: false, updateSubnetState: '' });
        }
    }

    genExtra(volume) {
        return (
            <>
                <Popconfirm
                    title="Are you sure?"
                    onConfirm={this.confirm.bind(this, volume)}
                    okText="Yes"
                    cancelText="No"
                    onCancel={e => e.stopPropagation()}
                >
                    <Button
                        type='danger'
                        onClick={e => e.stopPropagation()}
                        loading={this.props.vpc.loading.includes(volume.id)}
                    >
                        Delete
                    </Button>
                </Popconfirm>

                <Button
                    type="primary"
                    style={{ marginLeft: `12px` }}
                    onClick={this.updateSubnet.bind(this, volume.id)}
                    disabled={this.state.updateSubnetState}
                >
                    Update Subnet
                </Button>
            </>
        );
    }

    render() {
        const { dispatch, evs, currentNetwork, vpc } = this.props;

        const { subnet_ids } = currentNetwork
            ? currentNetwork
            : { subnet_ids: [] };

        let filteredSubnets = this.props.vpc?.subnetList?.filter(items =>
            subnet_ids?.includes(items.id)
        );

        return (
            <div>
                <div style={{ marginBottom: `24px` }}>
                    <Row
                        style={{
                            marginBottom: '0px',
                        }}
                    >
                        <Col span={24}>
                            <Button
                                type="primary"
                                onClick={e => {
                                    e.preventDefault();
                                    this.showCreateNewSubnet();
                                }}
                            >
                                Create New
                            </Button>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col span={24}>
                        <Collapse
                            onChange={this.stopcollapse.bind(this)}
                            bordered={false}
                            expandIcon={({ isActive }) => (
                                <Icon
                                    type="caret-right"
                                    rotate={isActive ? 90 : 0}
                                />
                            )}
                        >
                            {Array.isArray(filteredSubnets)
                                ? filteredSubnets.map((subnet, index) => {
                                      if (subnet) {
                                          return (
                                              <Panel
                                                  disabled={
                                                      this.props.detachingVolume
                                                  }
                                                  header={
                                                      <>
                                                          <span
                                                              style={{
                                                                  color: `#7d7d7d`,
                                                              }}
                                                          >
                                                              {subnet.name ===
                                                              ''
                                                                  ? currentNetwork.name +
                                                                    '-Volume'
                                                                  : subnet.name}{' '}
                                                          </span>{' '}
                                                      </>
                                                  }
                                                  extra={this.genExtra.bind(
                                                      this
                                                  )(subnet)}
                                                  key={subnet.id}
                                                  style={customPanelStyle}
                                              >
                                                  <div
                                                      style={{
                                                          marginTop: `20px`,
                                                      }}
                                                  >
                                                      <SubnetDetailPanel
                                                          subnet={subnet}
                                                          updateSubnetState={
                                                              this.state
                                                                  .updateSubnetState
                                                          }
                                                          onCancel={this.onCancel.bind(
                                                              this
                                                          )}
                                                      />
                                                  </div>
                                              </Panel>
                                          );
                                      } else {
                                          return (
                                              <Panel
                                                  disabled={true}
                                                  header={
                                                      <>
                                                          <Spin
                                                              indicator={
                                                                  antIcon
                                                              }
                                                          />
                                                          <span
                                                              style={{
                                                                  marginLeft: `12px`,
                                                              }}
                                                          >
                                                              Fetching...
                                                          </span>{' '}
                                                      </>
                                                  }
                                                  key={subnet_ids[index].id}
                                                  style={customPanelStyle}
                                              />
                                          );
                                      }
                                  })
                                : subnet_ids.map((volume, index) => {
                                      return (
                                          <Panel
                                              disabled={true}
                                              header={
                                                  <>
                                                      <Spin
                                                          indicator={antIcon}
                                                      />
                                                      <span
                                                          style={{
                                                              marginLeft: `12px`,
                                                          }}
                                                      >
                                                          Fetching...
                                                      </span>{' '}
                                                  </>
                                              }
                                              key={volume.id}
                                              style={customPanelStyle}
                                          />
                                      );
                                  })}
                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SubnetDetails;
