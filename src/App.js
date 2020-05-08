import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { main as mainConfig } from '@/router/index'
import { RenderRoutes } from '@/router/utils'
import store from '@/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <RenderRoutes routes={mainConfig}></RenderRoutes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
