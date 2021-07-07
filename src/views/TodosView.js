import React, { Component } from 'react';
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
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
