import React, { Component } from 'react';
import { connect } from 'react-redux'

@connect(({ test }) => ({ test }))

class MyHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='header'>
        12121adad
      </div>
    )
  }
}
export default MyHeader