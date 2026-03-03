import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increment2: (state) => {
        state.count += 2;
    }
  }
});


export const { increment, decrement,increment2 } = counterSlice.actions;
export default counterSlice.reducer;