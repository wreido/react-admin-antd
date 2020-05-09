import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { main as mainConfig } from '@/router/router'
import { RenderRoutes } from '@/router'
import { connect } from 'react-redux'

@connect(({ login }) => ({
  login
}))

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {RenderRoutes({ routes: mainConfig, authed: this.props.login.isLogin, authPath: '/login' })}
        </div>
      </Router>
    );
  }
}

export default App;
