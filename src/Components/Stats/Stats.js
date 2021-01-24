import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelectors } from 'redux/todos';
import './Stats.scss';

const Stats = () => {
  const total = useSelector(todosSelectors.getTotalTodosCount);
  const comletedTodos = useSelector(todosSelectors.getCompletedTodoCount);

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
