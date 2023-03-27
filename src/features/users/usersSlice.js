import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Peter" },
  { id: "1", name: "Tom" },
  { id: "2", name: "Sam" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
