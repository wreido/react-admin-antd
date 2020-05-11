/*
* 页面容器
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';

class MyMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="mainWarp" style={{ padding: 24, minHeight: 360 }}>
        {children}
      </div>
    );
  }
}
export default withRouter(MyMain);
