import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosOperations } from 'redux/todos/';
import './TodoEditor.scss';

export default function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!message) {
      return alert('Write something');
    }

    dispatch(todosOperations.addTodo(message));
    onSave();
    setMessage('');
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea
        className="TodoEditor__textarea"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="TodoEditor__button">
        Сохранить
      </button>
    </form>
  );
}
