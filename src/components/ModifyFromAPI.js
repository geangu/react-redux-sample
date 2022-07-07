import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { valueFromApi } from '../data/slices/counterSlice';

const ModifyFromAPI = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.counter.status);

  const handleChangeCounter = () => {
    dispatch(valueFromApi());
  };

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  return <button onClick={handleChangeCounter}>Change from API</button>;
};

export default ModifyFromAPI;
