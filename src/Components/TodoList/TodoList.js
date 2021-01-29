import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosOperations } from 'redux/todos';
import classNames from 'classnames';
import Todo from '../Todo';
import { todosSelectors } from 'redux/todos';
import './TodoList.scss';

export default function TodoList() {
  const todos = useSelector(todosSelectors.getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));

  return (
    <ul className="TodoList">
      {todos.map(({ id, description, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={description}
            completed={completed}
            onToggleCompleted={() =>
              onToggleCompleted({ id, completed: !completed })
            }
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
}
