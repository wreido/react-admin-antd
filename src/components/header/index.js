import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux'
const { Header } = Layout;

@connect(({ test }) => ({ test }))

class MyHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onSlidecollapsed: this.props.onSlidecollapsed
    };
  }
  toggle = () => {
    this.state.onSlidecollapsed()
  }
  render() {
    const { slidecollapsed } = this.props
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={slidecollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    )
  }
}
export default MyHeader