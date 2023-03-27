import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: "1",
    title: "Learning Redux ToolKit",
    content: "I've heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(), // this gets the current date and subtracts 10min and converts it into string
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(), // this gets the current date and subtracts 10min and converts it into string
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // functions are stored here
    // action.payload is function input

    // postAdded(state, action) {
    //   state.push(action.payload); // state.push is how you setState in redux in the createSlice
    // },

    //  neater code to refactor this way, see PostList.jsx
    postAdded: {
      reducer(state, action) {
        state.push(action.payload); // state.push is how you setState in redux in the createSlice
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId, // this will be from usersSlice
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
