import shortid from 'shortid';
import types from './todos-types';

const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    complited: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const toggleCompleted = todoId => ({
  type: types.TOGGLE_COMPLITED,
  payload: todoId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addTodo, deleteTodo, toggleCompleted, changeFilter };
