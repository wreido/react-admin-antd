/*
* 菜单
*/
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu } from 'antd';
import Icon from '@/components/pages/icon';

import menuList from '@/config/menu';

import './index.less';

const { SubMenu } = Menu;

@connect(({ test }) => ({ test }))

class MyMenu extends Component {
  constructor(props) {
    super(props);
    const menuTreeNode = this.renderMenu(menuList);
    this.state = {
      menuTreeNode,
    };
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={(
              <div className="menu-item">
                {item.icon && <Icon src={item.icon} />}
                <span>{item.title}</span>
              </div>
            )}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.path}>
          <NavLink to={item.path || ''}>
            <div className="menu-item">
              {item.icon && <Icon src={item.icon} />}
              <span>{item.title}</span>
            </div>
          </NavLink>
        </Menu.Item>
      );
    });
  }

  render() {
    const { menuTreeNode } = this.state;
    const { history } = this.props;
    return (
      <Menu className="menuWarp" theme="dark" selectedKeys={[history.location.pathname]} defaultSelectedKeys={['1']} mode="inline">
        {menuTreeNode}
      </Menu>
    );
  }
}
export default withRouter(MyMenu);
