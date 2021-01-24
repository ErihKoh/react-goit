import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import { getFilter } from '../../redux/todos/todos-selector';
import './TodoFilter.scss';

const TodoFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default TodoFilter;
