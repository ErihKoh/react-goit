import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    // console.log('Modal componentWillUnmount');
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      // console.log('escape');
    }
  };

  handleBbackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      // console.log('backdrop');
    }
  };

  render() {
    return createPortal(
      <div className={s.Modal__backdrop} onClick={this.handleBbackdropClick}>
        <div className={s.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
