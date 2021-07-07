import { Component } from 'react';
import classNames from 'classnames/bind';
import s from './Todos.module.css';

let cx = classNames.bind(s);

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.textField} onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" className={cx('btn', 'btnEdit')}>
          Creat
        </button>
      </form>
    );
  }
}

export default TodoEditor;
