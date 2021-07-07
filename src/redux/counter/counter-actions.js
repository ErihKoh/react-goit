import actionTypes from './counter-types';

const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});

export default { increment, decrement };
