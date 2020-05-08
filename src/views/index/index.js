import React, { Component } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux'
import { add, minus } from '@/store/actions/test'

@connect(({ test }) => ({
  test
}))

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  add = () => {
    this.props.dispatch(add())
  }

  minus = () => {
    this.props.dispatch(minus())
  }

  render() {
    return (
      <div>
        index31313131
        <Button type="primary" onClick={this.add}>加</Button>
        <Button type="primary" onClick={this.minus}>减</Button>

        {this.props.test.num}
      </div>
    )
  }
}
export default Index;