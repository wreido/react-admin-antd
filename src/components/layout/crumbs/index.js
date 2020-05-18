/*
* 面包屑
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Breadcrumb } from 'antd';

import { setCrumbs } from '@/store/actions/app';

import './index.less';

@connect(({ app }) => ({
  crumbsList: app.crumbsList,
}))

class Crumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toMenu = (item) => {
    const { history } = this.props;
    history.push(`${item.path}`);
  }

  close = (item, event) => {
    event.stopPropagation();
    const { crumbsList, dispatch } = this.props;
    dispatch(setCrumbs('set', crumbsList.filter((el) => el !== item)));
  }

  render() {
    const { crumbsList } = this.props;

    return (
      <Breadcrumb>
        {
          crumbsList.map((item) => {
            return (
              <Breadcrumb.Item key={item.title} onClick={this.toMenu.bind(this, item)}>
                <div className="crumb-title">
                  <span>{item.title}</span>
                  <span className="close" onClick={this.close.bind(this, item)} onKeyDown={this.close.bind(this, item)}>x</span>
                </div>
              </Breadcrumb.Item>
            );
          })
        }
      </Breadcrumb>
    );
  }
}
export default withRouter(Crumbs);
