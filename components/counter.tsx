import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../actions';
import { State } from '../interfaces';

const Counter: React.FunctionComponent = () => {
  const count = useSelector((state: State): number => state.count);
  const dispatch = useDispatch();

  const onIncrement = (): void => {
    dispatch(increment());
  };

  const onDecrement = (): void => {
    dispatch(decrement());
  };

  const onReset = (): void => {
    dispatch(reset());
  };

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
