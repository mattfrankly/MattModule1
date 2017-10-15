import React, { Component, PropTypes } from 'react';

import _ from 'lodash';
//import dep from './dep';

const a = [1];
const b = [2,3]

const otherarray = _.concat(a, b)

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'Hi Matt, welcome to Custom Modules! :)'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      </div>
    );
  }
}

export default RandomTest;
