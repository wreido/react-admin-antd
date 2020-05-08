import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { main as mainConfig } from '@/router/index'
import { RenderRoutes } from '@/router/utils'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RenderRoutes routes={mainConfig}></RenderRoutes>
        </div>
      </Router>
    );
  }
}

export default App;
