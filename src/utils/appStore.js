import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserSclice";
import feedReducer from "./feedSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    feed: feedReducer,
  },
});

export default appStore;
