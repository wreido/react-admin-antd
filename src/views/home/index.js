/*
* 首页
*/
import React, { Component } from 'react';

import { Table } from 'antd';

// import $fetch, { $api } from '@/api';

import utils from '@/utils';
import { columns } from './columns/listColimns';
import './index.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnsRes: columns(this),
      pageSize: 10,
      data: [
        {
          key: '1', name: 'John Brown', age: 32, tel: '0571-22098909', phone: 18889898989, address: 'New York No. 1 Lake Park',
        },
        {
          key: '2', name: 'Jim Green', tel: '0571-22098333', phone: 18889898888, age: 42, address: 'London No. 1 Lake Park',
        },
        {
          key: '3', name: 'Joe Black', age: 32, tel: '0575-22098909', phone: 18900010002, address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4', name: 'Jim Red', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'London No. 2 Lake Park',
        },
        {
          key: '5', name: 'Jake White', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'Dublin No. 2 Lake Park',
        },
      ],
    };
  }

  componentDidMount() {
    // $fetch($api.bindLeader, { a: 1 });
    console.log(utils.tofixedExtend(12000000.12365, 3, 'down'));
  }

  // 切换分页和条数
  onChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.setState({ pageSize });
  }

  render() {
    const { columnsRes, data, pageSize } = this.state;
    return (
      <div className="homeWarp">
        <div className="table-box">
          <Table
            columns={columnsRes}
            dataSource={data}
            bordered
            tableLayout="fixed"
            pagination={{
              position: ['bottomCenter'],
              total: 500,
              onChange: this.onChange,
              onShowSizeChange: this.onChange,
              pageSizeOptions: ['10', '20', '50', '100'],
              pageSize,
            }}
          />
        </div>
      </div>
    );
  }
}
export default Home;
