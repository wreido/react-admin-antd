/*
* layout入口
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import MyHeader from '@/components/layout/header';// 头部
import MyMenu from '@/components/layout/menu';// 菜单
import Main from '@/components/layout/main';// 主视图
import Crumbs from '@/components/layout/crumbs';// 面包屑

import { setCollapsed } from '@/store/actions/app';

import './index.less';

const {
  Header, Content, Sider, Footer,
} = Layout;

@connect(({ app }) => ({
  isCollapsed: app.isCollapsed,
}))

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCollapse = () => {
    const { dispatch, isCollapsed } = this.props;
    dispatch(setCollapsed(!isCollapsed));
  }

  render() {
    const { children, isCollapsed } = this.props;

    return (
      <Layout className="layout">
        <Sider collapsible collapsed={isCollapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <h1>logo</h1>
          </div>
          <MyMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="header" style={{ padding: 0 }}>
            <MyHeader />
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            <Crumbs />
            <Main>{children}</Main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Index);
