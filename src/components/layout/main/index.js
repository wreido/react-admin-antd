import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'

class MyMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main" style={{ padding: 24, minHeight: 360 }}>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(MyMain)