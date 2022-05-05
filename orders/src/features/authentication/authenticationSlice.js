import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    currentUserId: null,
  },
  reducers: {
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
  }
});

export const { setCurrentUserId } = authenticationSlice.actions;