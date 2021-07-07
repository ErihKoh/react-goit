// import Counter from './components/Counter/MyClass';
// import ColorPicker from './components/CollorPicker/CollorPicker';
// import options from './components/CollorPicker/Collor';

import { Component } from 'react';
import './App.css';
import { ReactComponent as AddIcon } from './icons/add.svg';
import TodoList from './components/Todos/';
// import todos from './components/Todos/todos.json';
import TodoEditor from './components/Todos/TodoEditor';
import FilterTodo from './components/Todos/FilterTodo';
import Modal from './components/Modal';
import IconBatton from './components/IconButton';
import todosApi from '../src/services/todos-api';

// import shortid from 'shortid';
// import Form from './components/Form';

// import { Children } from 'react';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // const todos = localStorage.getItem('todos');
    // const parseTodos = JSON.parse(todos);
    // parseTodos && this.setState({ todos: parseTodos });
    todosApi
      .fetchTodos()
      .then(todos => {
        this.setState({ todos });
      })
      .catch(error => console.log(error));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // const nextTodos = this.state.todos;
  //   // const prevTodos = prevState.todos;

  //   // if (nextTodos !== prevTodos) {
  //   //   localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   // }

  //   // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //   //   this.toggleModal();
  //   // }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    const todoData = {
      text,
      completed: false,
    };
    todosApi.addTodos(todoData).then(todo => {
      this.setState(({ todos }) => ({
        todos: [...todos, todo],
      }));
      this.toggleModal();
    });
  };

  deleteTodo = todoId => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
    });
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('finded')
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = {
      completed: !completed,
    };

    todosApi.updateTodo(todoId, update).then(updatedTod => {
      this.setState(({ todos }) => ({
        todos: todos.map(todo =>
          todo.id === updatedTod.id ? updatedTod : todo,
        ),
      }));
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // formSubmitHandler = data => {
  // console.log(data)
  // }

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    const normalizeFilter = this.state.filter.toLowerCase();

    const filterTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter),
    );

    return (
      <>
        <IconBatton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconBatton>

        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            {/* <button type="button" onClick={this.toggleModal}>
              Close modal
            </button> */}
          </Modal>
        )}
        {/* <Counter
       value={5}
       step={3}
     /> */}
        {/* <ColorPicker options={options} /> */}
        {/* <Form onSubmit={this.formSubmitHandler}/> */}

        <FilterTodo value={filter} onChange={this.changeFilter} />
        <div>
          <p>Количество заданий: {totalTodoCount}</p>
          <p>Количество выполненных заданий:{completedTodoCount}</p>
        </div>
        <TodoList
          todos={filterTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
