import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
} from './todos-actions';

const fetchTodos = () => async dispatch => {
  dispatch(fetchTodoRequest);
  try {
    const { data } = await axios.get('/tasks');
    dispatch(fetchTodoSuccess(data));
  } catch (error) {
    dispatch(fetchTodoError(error));
  }

  // axios
  //   .get('/todos')
  //   .then(({ data }) => dispatch(fetchTodoSuccess(data)))
  //   .catch(error => dispatch(fetchTodoError(error)));
};

const addTodo = description => dispatch => {
  const todo = { description, completed: false };

  dispatch(addTodoRequest());
  axios
    .post('/tasks', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());
  axios
    .delete(`/tasks/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };
  dispatch(toggleCompletedRequest());
  axios
    .patch(`/tasks/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

const todosOperations = {
  addTodo,
  deleteTodo,
  toggleCompleted,
  fetchTodos,
};

export default todosOperations;
