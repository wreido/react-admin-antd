/* 
* 首页
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Table } from 'antd'
import { setIsLogin } from '@/store/actions/login'
import $fetch, { $api } from '@/api'
import { columns } from './columns/listColimns'

@connect(({ login }) => ({
  login
}))

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: columns(this),
      data: [
        { key: '1', name: 'John Brown', age: 32, tel: '0571-22098909', phone: 18889898989, address: 'New York No. 1 Lake Park' },
        { key: '2', name: 'Jim Green', tel: '0571-22098333', phone: 18889898888, age: 42, address: 'London No. 1 Lake Park' },
        { key: '3', name: 'Joe Black', age: 32, tel: '0575-22098909', phone: 18900010002, address: 'Sidney No. 1 Lake Park' },
        { key: '4', name: 'Jim Red', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'London No. 2 Lake Park' },
        { key: '5', name: 'Jake White', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'Dublin No. 2 Lake Park' }
      ]
    }
  }

  componentDidMount() {
    $fetch($api.bindLeader, { a: 1 })
  }

  outLogin = () => {
    this.props.dispatch(setIsLogin(false))
  }

  render() {
    const { columns, data } = this.state
    return (
      <div className='homeWarp'>
        Home
        <Button onClick={this.outLogin}>退出登录</Button>
        <Table columns={columns} dataSource={data} bordered />
      </div>
    )
  }
}
export default Home;