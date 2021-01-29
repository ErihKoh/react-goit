import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Components/Container';
import Stats from '../Components/Stats';
import TodoList from '../Components/TodoList';
import TodoEditor from '../Components/TodoEditor';
import Filter from '../Components/TodoFilter';
import todosOperations from '../../src/redux/todos/todos-operations';
import todosSelectors from '../../src/redux/todos/todos-selector';
import Modal from '../Components/Modal';
import IconButton from '../Components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export const TodosView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const isLoadingTodos = useSelector(todosSelectors.getLoading);

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <TodoList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default TodosView;
