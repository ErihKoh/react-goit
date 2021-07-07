import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import classNames from 'classnames';
import Todo from '../Todo';
import { getVisibleTodos } from '../../redux/todos/todos-selector';
import './TodoList.scss';

export default function TodoList() {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosActions.toggleCompleted(id));

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
}
