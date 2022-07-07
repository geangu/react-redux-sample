import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { down, up } from '../data/slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const handlerUp = () => {
    dispatch(up());
  };

  const handlerDown = () => {
    dispatch(down());
  };

  return (
    <div>
      <button onClick={handlerUp}> + </button>
      <span> {counter} </span>
      <button onClick={handlerDown}> - </button>
    </div>
  );
};

export default Counter;
