import React, { Component, PropTypes } from 'react';
// import _ from 'lodash';

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

class MattModule1 extends Component {

  constructor(props) {
    super(props);
    this.state = { results: "" };
    if (this.props.url) {
      getJSON(this.props.url, (data) => this.setState( {results: data} ) );
    }
  }
  
  render(){
//     let {
//           h2 = ''
//         } = this.props;

//     let {
//       flux, config
//     } = this.context;

    return (
      <div>
        <h2>{this.props.h2}:</h2>
        <code>{this.state.results}</code>
      </div>
    );
  }
}

export default MattModule1;
