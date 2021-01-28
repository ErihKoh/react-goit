import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import { increment, decrement } from '../../redux/counter/counter-actions';
import { getValue, getStep } from '../../redux/counter/counter-selector';
import './Counter.css';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => dispatch(increment(step))}
        onDecrement={() => dispatch(decrement(step))}
      />
    </div>
  );
}
