import { combineReducers } from 'redux';
import actionTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReduser = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReduser,
});
