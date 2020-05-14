/*
* 头部
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from 'antd';

import { setIsLogin } from '@/store/actions/login';

import './index.less';

@connect(({ test }) => ({ test }))

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 退出登录
  outLogin = () => {
    const { dispatch } = this.props;
    dispatch(setIsLogin(false));
  }

  render() {
    return (
      <div className="headerWarp">
        <Button onClick={this.outLogin}>退出登录</Button>
      </div>
    );
  }
}
export default withRouter(MyHeader);
