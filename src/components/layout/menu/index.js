/* 
* 菜单
*/
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { connect } from "react-redux"
import menuList from '@/config/menu'

const { SubMenu } = Menu

@connect(({ test }) => ({ test }))

class MyMenu extends Component {
  constructor(props) {
    super(props)
    const menuTreeNode = this.renderMenu(menuList)
    this.state = {
      menuTreeNode
    }
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.path}>
          <NavLink to={item.path || ''}>
            {item.icon || item.icon === '' ? (
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
              </span>
            ) : (
                item.title
              )}
          </NavLink>
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <Menu className='menuWarp' theme="dark" selectedKeys={[this.props.history.location.pathname]} defaultSelectedKeys={['1']} mode="inline">
        {this.state.menuTreeNode}
      </Menu>
    )
  }
}
export default withRouter(MyMenu)