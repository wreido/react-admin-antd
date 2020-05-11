/* 
* 首页
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setIsLogin } from '@/store/actions/login'
import $fetch, { $api } from '@/api'

@connect(({ login }) => ({
  login
}))

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    $fetch($api.bindLeader, { a: 1 })
  }

  outLogin = () => {
    this.props.dispatch(setIsLogin(false))
  }

  render() {
    return (
      <div className='homeWarp'>
        Home
        <Button onClick={this.outLogin}>退出登录</Button>
      </div>
    )
  }
}
export default Home;