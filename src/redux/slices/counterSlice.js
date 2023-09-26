import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 5;
      console.log(state.value, "stateeeeeeeeeeeee");
    },
    decrement: (state) => {
      state.value -= 5;
      console.log(state.value, "decrementttttttttttt");
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      // console.log(action.payload, "payloaddd");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// console.log(counterSlice.actions, "acttttttttttttttttt");

export default counterSlice.reducer;
