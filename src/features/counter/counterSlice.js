import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: { // functions are stored here
    increment: (state) => {
      // invoke function as increment()
      // increasing state count by 1
      state.count += 1; // state.count is the same state defined above
    },
    decrement: (state) => {
      // invoke function as decrement()
      // decreasing state count by 1
      state.count -= 1;
    },
    reset: (state) => {
      // invoke function as reset()
      // reset state back to 0
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      // invoke function as increaseByAmount(action)
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions; // exporting the state functions

export default counterSlice.reducer; // exporting the entire reducer
