import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const stepReduser = createReducer(1, {});

export default combineReducers({
  value: valueReducer,
  step: stepReduser,
});
