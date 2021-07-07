import classNames from 'classnames';
import './ColorPicker.css';
import { PureComponent } from 'react';

class ColorPicker extends PureComponent {
  state = {
    activOptionIdx: 0,
  };

  // если отсутствует PureComponent

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activOptionIdx !== this.state.activOptionIdx;
  //   }

  setActiveIndex = index => {
    this.setState({ activOptionIdx: index });
  };

  // makeOptionClassName = (index) => {

  //  return classNames('option', {
  //         'option-active': index === this.state.activOptionIdx,
  //     })
  //  const optionClasses = ['option'];
  //     if (index === this.state.activOptionIdx) {

  //         optionClasses.push('option-active')

  //     }
  //     return optionClasses.join(' ');
  // }

  render() {
    const { activOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activOptionIdx];
    console.log(activOptionIdx);
    return (
      <div className="container">
        <h2 className="title">Color Picker</h2>

        <p> Выбранный цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={classNames('option', {
                'option-active': index === this.state.activOptionIdx,
              })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
