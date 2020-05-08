import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd'
import { connect } from 'react-redux'
import MyMenu from '@/components/menu'
import { add, minus } from '@/store/actions/test'
import './index.less'

const { Header, Content, Sider, Footer } = Layout;

@connect(({ test }) => ({
  test
}))

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  add = () => {
    this.props.dispatch(add())
  }

  minus = () => {
    this.props.dispatch(minus())
  }

  render() {
    return (
      <Layout className="layout">
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <h1>logo</h1>
          </div>
          <MyMenu></MyMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header" style={{ padding: 0 }}>
            31313
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Index;