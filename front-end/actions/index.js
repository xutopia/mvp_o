// here are the axios actions
import axios from 'axios';

export const FETCH_NODES = 'FETCH_NODES';
export const MAKE_NODE = 'MAKE_NODE';
const URL = '/api/node';

export function fetchNodes() {
  const request = axios.get('/api/nodes');

  return {
    type: FETCH_NODES,
    payload: request
  }
}

export function makeNode(value) {
  const request = axios.post('/api/node', value);
  return {
    type: MAKE_NODE,
    payload: request
  }
}
