import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'HIGH_RELIABILITY':
      return { ...state, reliability: 'high' };
    case 'LOW_RELIABILITY':
      return { ...state, reliability: 'low' };
    default:
      return state;
  }
};

const initialState = { reliability: 'high' };

export default () => createStore(reducer, initialState);
