import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import darkModeReducer from "./darkModeSlice";

const store = configureStore({
  reducer: {
    myCounter: counterReducer,
    myTodo: todoReducer,
    myDarkMode: darkModeReducer,
  },
});

export default store;
