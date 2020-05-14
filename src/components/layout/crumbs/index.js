/*
* 面包屑
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Breadcrumb } from 'antd';

class Crumbs extends Component {
  render() {
    return (
      <Breadcrumb className="crumbsWarp" style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default withRouter(Crumbs);
