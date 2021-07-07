import React from 'react';
import { useSelector } from 'react-redux';
import './Stats.scss';

const Stats = () => {
  const total = useSelector(state => state.todos.items.length);
  const comletedTodos = useSelector(state =>
    getCompletedTodoCount(state.todos.items),
  );

  function getCompletedTodoCount(todos) {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }

  return (
    <div className="Stats">
      <p className="Stats__item">
        <span className="Stats__value">{total}</span>
        <span className="Stats__label">Всего</span>
      </p>
      <p className="Stats__item">
        <span className="Stats__value">{comletedTodos}</span>
        <span className="Stats__label">Выполнено</span>
      </p>
    </div>
  );
};

export default Stats;
