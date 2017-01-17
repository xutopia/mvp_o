// here are the reducers that update global state
import {FETCH_NODES} from '../actions/index';
const INITIAL_STATE = {nodes: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_NODES:
      return {...state, nodes: action.payload.data};
    default:
      return state;
  }
}
