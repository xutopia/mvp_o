//here goes the 2 routes
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import NodesNew from './components/nodes_new';
import NodesShow from './components/nodes_show';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={NodesShow} />
    <Route path='nodes/show' component={NodesNew} />
  </Route>
);
