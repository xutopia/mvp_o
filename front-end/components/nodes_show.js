// (hopefully) can get Alchemy working to display graph
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNodes} from '../actions/index';
import * as alchemy from 'alchemyjs';

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
    var some_data =
    {
      "nodes": [
        {
          "id": 1
        },
        {
          "id": 2
        },
        {
          "id": 3
        }
      ],
      "edges": [
        {
          "source": 1,
          "target": 2
        },
        {
          "source": 1,
          "target": 3,
        }
      ]
    };

    alchemy.begin({"dataSource": some_data});
    return (
      <div>
        <button onClick={this.getData.bind(this)}>Show Nodes</button>
        <div id="alchemy" class="alchemy">something</div>
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
