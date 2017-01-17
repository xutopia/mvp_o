// (hopefully) can get Alchemy working to display graph
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Alchemy from 'alchemy';
import {fetchNodes} from '../actions/index';

class NodesShow extends Component {
  render() {
    return (
      <div>
        Something in here
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    nodes: state.nodes.nodes
  }
}

export default connect(mapStateToProps, {fetchNodes})(NodesShow);
