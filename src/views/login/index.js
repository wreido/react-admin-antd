import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setIsLogin } from '@/store/actions/login'

@connect(({ login }) => ({
  login
}))

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  login = () => {
    this.props.dispatch(setIsLogin(true))
    this.props.history.push('/')
  }

  render() {
    return <div>
      <Button onClick={this.login}>Login</Button>
    </div>
  }
}
export default Login
