// (hopefully) can get Alchemy working to display graph
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Alchemy from 'alchemy';
import {fetchNodes} from '../actions/index';

class NodesShow extends Component {
  componentWillMount() {
    this.props.fetchNodes();
  }

  getData() {
    this.props.fetchNodes();
  }

  render() {
    if(!this.props) {
      return (<div></div>)
    }
    console.log(this.props);

    return (
      <div>
        Something in here
        <button onClick={this.getData.bind(this)}>Show Nodes</button>
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
