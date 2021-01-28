import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/todos';
import { todosSelectors } from 'redux/todos';
import './TodoFilter.scss';

const TodoFilter = () => {
  const value = useSelector(todosSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default TodoFilter;
