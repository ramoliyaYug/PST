import { createSlice } from "@reduxjs/toolkit";

// Define slice with both count and step
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    step: 1, // default step
  },
  reducers: {
    // Increase count by 'step' value
    increment: (state) => {
      state.count += state.step;
    },
    // Decrease count by 'step' value
    decrement: (state) => {
      state.count -= state.step;
    },
    // Update the 'step' value from input
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, setStep } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
