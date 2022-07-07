import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    up: (state) => {
      state.value = state.value + 1;
    },
    down: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { up, down } = counterSlice.actions;

export default counterSlice.reducer;
