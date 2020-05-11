import React, { Component } from 'react';
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MyHeader from '@/components/layout/header'//头部
import MyMenu from '@/components/layout/menu'//菜单
import Crumbs from '@/components/layout/crumbs'//面包屑
import Main from '@/components/layout/main'//面包屑
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
            <MyHeader></MyHeader>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Crumbs></Crumbs>
            <Main>{this.props.children}</Main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default withRouter(Index)