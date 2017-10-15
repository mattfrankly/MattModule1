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
    this.state = { results: {title:"test"} };
    getJSON("https://modules-demo.franklyinc.com/latest.js?affiliate=wnow&1", function(data) {this.setState({results: data})}(this) );
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
