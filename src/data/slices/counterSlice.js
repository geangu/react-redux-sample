import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const valueFromApi = createAsyncThunk(
  'counter/valueFromApi',
  async () => {
    const response = await fetch('http://localhost:3001/');
    return await response.json();
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: '',
  },
  reducers: {
    up: (state) => {
      state.value = state.value + 1;
    },
    down: (state) => {
      state.value = state.value - 1;
    },
  },
  extraReducers: {
    [valueFromApi.pending]: (state) => {
      state.status = 'loading';
    },
    [valueFromApi.fulfilled]: (state, action) => {
      state.status = 'success';
      state.value = action.payload.value;
    },
    [valueFromApi.rejected]: (state) => {
      state.status = 'failure';
    },
  },
});

export const { up, down } = counterSlice.actions;

export default counterSlice.reducer;
