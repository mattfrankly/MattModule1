import React, { Component, PropTypes } from 'react';

import _ from 'lodash';
import getUsefulContents from './dep';

class MattModule1 extends Component {
  render(){
    let {
      h2 = ''
    } = this.props;

     let results = '';
     getUsefulContents('http://www.example.com', data => { results = data; });

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}:</h2>
        <pre>{results}</pre>
      </div>
    );
  }
}

export default MattModule1;
