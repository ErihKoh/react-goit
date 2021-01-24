import React, { Component } from 'react';
// import shortid from 'shortid';
import Container from '../Components/Container';
import Stats from '../Components/Stats';
import TodoList from '../Components/TodoList';
import TodoEditor from '../Components/TodoEditor';
import Filter from '../Components/TodoFilter';
import Modal from '../Components/Modal';
import IconButton from '../Components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    // todos: [],
    // filter: '',
    showModal: false,
  };

  // componentDidMount() {
  //   // console.log('App componentDidMount');

  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('App componentDidUpdate');

  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     console.log('Обновилось поле todos, записываю todos в хранилище');
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }

  //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //     this.toggleModal();
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));

  //   this.toggleModal();
  // };

  // deleteTodo = todoId => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.filter(({ id }) => id !== todoId),
  //   }));
  // };

  // toggleCompleted = todoId => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.map(todo =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  //     ),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleTodos = () => {
  //   const { filter, todos } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(({ text }) =>
  //     text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          {/* <Stats total={totalTodoCount} completed={completedTodoCount} /> */}
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>

          {/* TODO: вынести в отдельный компонент */}
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
