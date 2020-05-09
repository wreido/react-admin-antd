import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"
import { main as routes } from '@/router/router'
import { RenderRoutes } from '@/router'
import { connect } from 'react-redux'
import dict from '@/utils/dict';
import MyLayout from '@/components/layout'
import Login from '@/views/login'

@connect(({ login }) => ({
  authed: login.isLogin
}))

class App extends Component {

  render() {
    const { authed } = this.props
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={withRouter(Login)} />
            <MyLayout>
              {RenderRoutes(routes, authed, dict.authPath)}
            </MyLayout>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
