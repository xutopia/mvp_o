// the main route for the homepage
import React, {Component} from 'react';
import NodesNew from './nodes_new';
import NodesShow from './nodes_show';

export default class App extends Component {
  render() {
    return (
      <div>
        <NodesNew />
        
        <NodesShow />
      </div>
    );
  }
}
