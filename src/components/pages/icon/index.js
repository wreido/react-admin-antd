/*
* icon
*/
import React, { Component } from 'react';

import './index.less';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { src } = this.props;

    return (
      <div className="iconWarp">
        <img src={src} alt="" />
      </div>
    );
  }
}

Icon.defaultProps = {
  src: '',
};

export default Icon;
