import { combineReducers } from 'redux';
import NodesReducer from './reducer_nodes';

const rootReducer = combineReducers({
  nodes: NodesReducer
});

export default rootReducer;
