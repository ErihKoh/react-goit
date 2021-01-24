import classNames from 'classnames/bind';
import s from './Todos.module.css';

let cx = classNames.bind(s);

function Todo({ text, completed, onToggleCompleted, onDeleteTodo }) {
  return (
    <div
      className={cx('item', {
        active: completed,
      })}
    >
      <input
        type="checkbox"
        className={s.TodoList__checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p>{text}</p>
      <button className={s.btn} onClick={onDeleteTodo}>
        delete
      </button>
    </div>
  );
}

export default Todo;
