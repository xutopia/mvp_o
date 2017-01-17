// class with redux-form to make queries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {makeNode} from '../actions/index';

export default class NodesNew extends Component {
  postData() {
    var number = Math.random() * 1000;
    makeNode(number);
  }
  render() {
    return (
      <div>
        <button onClick={this.postData.bind(this)}>Make a Node</button>
      </div>
    );
  }
}
