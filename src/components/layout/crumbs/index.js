import React, { Component } from 'react'
import { Breadcrumb } from 'antd'


class Crumbs extends Component {
  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
export default Crumbs