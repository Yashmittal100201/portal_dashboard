// src/components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Store/reducers/counter'; // Adjust the import as necessary

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
