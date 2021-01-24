// import classNames from 'classnames/bind';
import s from './Todos.module.css';
import React from 'react';
import Todo from './Todo';

// let cx = classNames.bind(s);

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.list}>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
