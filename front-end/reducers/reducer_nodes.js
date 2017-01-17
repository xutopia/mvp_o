// here are the reducers that update global state
import {FETCH_NODES} from '../actions/index';
const INITIAL_STATE = {nodes: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_NODES:
      console.log('here is the payload from a get request', action.payload.data);
      return {...state, nodes: action.payload.data};
      // return action.payload.data;
    default:
      return state;
  }
}
