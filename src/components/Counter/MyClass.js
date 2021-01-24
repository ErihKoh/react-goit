

import Controls from './Controls';
import Value from './Value'

// Отделяйте именованные импорты, это повышает читаемость кода
import React, { Component } from 'react';


class Counter extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0,
  };

  static propTypes = {

  };
  
  state = {
    initialValue: this.props.value
  }

  handleIncrement = () => {
    this.setState((prevState, {step}) =>  ({initialValue: prevState.initialValue + step}))
  }

    handleDecrement = () => {
       this.setState((prevState, {step}) =>  ({initialValue: prevState.initialValue - step}))
    }

    render() {
      // const { step } = this.props;
      const set = this.state;

        return (
          <div>
            <Value initialValue={set.initialValue}/>
            <Controls
            onIncriment={this.handleIncrement}
            onDecrement={this.handleDecrement}/>
             
            </div>
           
        );
    }
}

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <div>
//         <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
//         {isOpen && children}
//       </div>
//     );
//   }
// }


// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class Toggle extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод который будем передавать в Button для вызова при клике
//   updateMessage = evt => {
//     console.log(evt); // Доступен объект события

//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }



export default Counter;