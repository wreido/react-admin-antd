/*
* 菜单
*/
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu } from 'antd';
import Icon from '@/components/pages/icon';

import { setCrumbs } from '@/store/actions/app';
import menuList from '@/config/menu';

import './index.less';

const { SubMenu } = Menu;

@connect(({ app }) => ({
  isCollapsed: app.isCollapsed,
}))

class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setCrumbs = (route) => {
    const { dispatch } = this.props;
    dispatch(setCrumbs('add', [route]));
  }

  renderMenu = (data, isCollapsed) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={(
              <div className="menu-item">
                {item.icon && <Icon src={item.icon} />}
                {!isCollapsed && <span>{item.title}</span>}
              </div>
            )}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.path} onClick={this.setCrumbs.bind(this, item)}>
          <NavLink className="link" to={item.path || ''}>
            <div className="menu-item">
              {item.icon && <Icon src={item.icon} />}
              {!isCollapsed && <span>{item.title}</span>}
            </div>
          </NavLink>
        </Menu.Item>
      );
    });
  }

  render() {
    // const { menuTreeNode } = this.state;
    const { history, isCollapsed } = this.props;
    return (
      <Menu className="menuWarp" theme="dark" selectedKeys={[history.location.pathname]} defaultSelectedKeys={['1']} mode="inline">
        {this.renderMenu(menuList, isCollapsed)}
      </Menu>
    );
  }
}
export default withRouter(MyMenu);
