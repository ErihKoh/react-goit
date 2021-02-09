import classNames from 'classnames/bind';
import s from './CollorPicker.module.css';
import { useState } from 'react';

let cx = classNames.bind(s);

function CollorPicker({ options }) {
  const [activOptionIdx, setActivOptionIdx] = useState(0);

  const { label } = options[activOptionIdx];
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>

      <p> Выбранный цвет: {label}</p>

      <div>
        {options.map(({ label, color }, index) => (
          <button
            type="button"
            key={label}
            className={cx('option', {
              'option-active': index === activOptionIdx,
            })}
            style={{ backgroundColor: color }}
            onClick={() => setActivOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CollorPicker;
