import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSclice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default appStore;
