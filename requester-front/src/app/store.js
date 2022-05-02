import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice } from '../features/authentication/authenticationSlice';
import { usersSlice } from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});
