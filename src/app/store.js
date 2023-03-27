import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // this is counterSlice.js
    posts: postsReducer,
    users: usersReducers,
  },
});
