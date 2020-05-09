import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(({ login }) => ({
  login
}))


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.login)
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
export default Home;