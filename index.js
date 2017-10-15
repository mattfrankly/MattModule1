import React, { Component, PropTypes } from 'react';
// import _ from 'lodash';

class MattModule1 extends Component {

  constructor(props) {
    super(props);
    this.state = { results: {title:"test"} };
  }
  
  render(){
    let {
          h2 = ''
        } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}:</h2>
        <pre>{JSON.stringify(this.state.results)}</pre>
      </div>
    );
  }
}

export default MattModule1;
