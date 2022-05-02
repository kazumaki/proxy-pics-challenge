import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    selectedUserId: null,
    status: 'idle',
  },
  reducers: {
    fetchUsersStart: (state, action) => {
      state.status = 'loading';
    },
    fetchUsersSuccess: (state, action) => {
      const { users } = action.payload;
      state.status = 'idle';
      state.users = users;
    },
    fetchUsersFailure: (state, action) => {
      state.status = 'error';
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, selectUser } = usersSlice.actions;