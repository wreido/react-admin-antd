/*
* 主视图
*/
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';
import { main as routes } from '@/router/router';
import { RenderRoutes } from '@/router';
import { connect } from 'react-redux';
import { setConfigEnv } from '@/store/actions/app';
import dict from '@/utils/dict';
import MyLayout from '@/components/layout';
import Login from '@/views/login';
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
          {app.ENV === 'testing' && <div className="env">测试环境</div>}
          <Switch>
            <Route exact path="/login" component={withRouter(Login)} />
            <MyLayout>
              {RenderRoutes(routes, authed, dict.authPath)}
            </MyLayout>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
