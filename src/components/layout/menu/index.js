import React, { Component } from 'react';
import { Menu } from 'antd';
import { connect } from "react-redux";
const { SubMenu } = Menu

@connect(({ test }) => ({ test }))

class MySlider extends Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={null}>
          Option 1
            </Menu.Item>
        <Menu.Item key="2" icon={null}>
          Option 2
            </Menu.Item>
        <SubMenu key="sub1" icon={null} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={null} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={null} />
      </Menu>
    )
  }
}
export default MySlider