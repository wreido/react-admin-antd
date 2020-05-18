/*
* 主视图
*/
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { setConfigEnv } from '@/store/actions/app';
import MyLayout from '@/components/layout';
import Login from '@/views/login';

import { main as routes } from '@/router/router';
import { RenderRoutes } from '@/router';
import { DICT } from '@/config';

import './App.css';

@connect(({ login, app }) => ({
  authed: login.isLogin,
  app,
}))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getConfigEnv();
    console.log(DICT);
  }

  // 获取当前环境
  getConfigEnv = () => {
    const { dispatch } = this.props;
    const ENV = process.env.NODE_ENV === 'development' ? 'testing' : process.env.REACT_APP_CONFIG_ENV;
    dispatch(setConfigEnv(ENV));
  }

  render() {
    const { authed, app } = this.props;
    return (
      <Router>
        <div className="App">
          {app.ENV === 'testing' && (<div className="env">{`测试环境 ${DICT.APP_INFO.APP_VERSION}`}</div>)}
          <Switch>
            <Route exact path="/login" component={withRouter(Login)} />
            <MyLayout>
              {RenderRoutes(routes, authed, DICT.AUTH_PATH)}
            </MyLayout>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
