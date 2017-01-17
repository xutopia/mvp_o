import { combineReducers } from 'redux';
import NodesReducer from './reducer_nodes';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  nodes: NodesReducer,
  form: formReducer
});

export default rootReducer;
