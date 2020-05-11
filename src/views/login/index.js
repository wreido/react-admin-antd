/*
* 登录
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setIsLogin } from '@/store/actions/login';

@connect(({ login }) => ({
  login,
}))

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  login = () => {
    const { dispatch, history } = this.props;
    // 设置登录状态
    dispatch(setIsLogin(true));
    history.push('/');
  }

  render() {
    return (
      <div className="loginWarp">
        <Button onClick={this.login}>Login</Button>
      </div>
    );
  }
}
export default Login;
