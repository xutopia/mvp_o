// class with redux-form to make queries
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

class NodesNew extends Component {
  render() {
    const {fields: {name, owe}, handleSubmit} = this.props;
    return (
      <div>Some text
      </div>
    );
  }
}
