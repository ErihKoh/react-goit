import { createSelector } from '@reduxjs/toolkit';

const getTodos = state => state.todos.items;
const getFilter = state => state.todos.filter;
const getLoading = state => state.todos.loading;

const getTotalTodosCount = state => {
  const todos = getTodos(state);
  return todos.length;
};

const getCompletedTodoCount = createSelector([getTodos], todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ description }) =>
      description?.toLowerCase().includes(normalizedFilter),
    );
  },
);

const todosSelectors = {
  getTodos,
  getFilter,
  getLoading,
  getVisibleTodos,
  getTotalTodosCount,
  getCompletedTodoCount,
};
export default todosSelectors;

// const getVisibleTodos = state => {
//   const todos = getTodos(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

// const getCompletedTodoCount = state => {
//   const todos = getTodos(state);
//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// };
