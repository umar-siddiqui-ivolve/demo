import React from 'react';
import { Tabs, Button, Icon } from 'antd';

const { TabPane } = Tabs;
const operations = (
  <div>
    <Button>
      <Icon type="caret-right" />
    </Button>{' '}
    <Button>
      <Icon type="pause" />
    </Button>{' '}
    <Button>
      <Icon type="stop" />
    </Button>
  </div>
);
const operations2 = (
  <Button>
    <Icon type="stop" />
  </Button>
);

class UserDetails extends React.Component {
  state = {};
  render() {
    return (
      <Tabs type="card" tabBarExtraContent={operations}>
        <TabPane tab="Overview" key="1">
          {this.props.eachUserDetail}
        </TabPane>
      </Tabs>
    );
  }
}

export default UserDetails;
