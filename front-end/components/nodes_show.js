// (hopefully) can get Alchemy working to display graph
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNodes} from '../actions/index';

class NodesShow extends Component {
  componentWillMount() {
    this.props.fetchNodes();
    console.log('this.props', this.props);
  }

  getData() {
    this.props.fetchNodes();
  }

  renderNodes(nodes) {
    console.log('inside renderNodes, checking out props', nodes.nodes.records)
    var nodes = JSON.stringify(nodes.nodes.records);
    return (
      <div>{nodes}</div>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('should appear when data is received', nextProps);
    this.renderNodes(nextProps);
  }

  render() {
    if(!this.props) {
      return (<div></div>)
    }
    console.log('here are the props', this.props);

    return (
      <div>
        <button onClick={this.getData.bind(this)}>Show Nodes</button>
          <table>
            <thead>
              <tr>
                <th>Nodes</th>
              </tr>
            </thead>
          </table>
              {this.props.length === 0 ? '' : this.renderNodes(this.props)}
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
