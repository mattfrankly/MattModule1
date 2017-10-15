import React, { Component, PropTypes } from 'react';

import _ from 'lodash';
//import dep from './dep';

class MattModule1 extends Component {
  render(){
    let {
      h2 = ''
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}.</h2>
      </div>
    );
  }
}

export default MattModule1;
