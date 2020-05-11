/*
* 头部
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.less';

@connect(({ test }) => ({ test }))

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headerWarp">
        12121adad{this.props.test}
      </div>
    );
  }
}
export default withRouter(MyHeader);
