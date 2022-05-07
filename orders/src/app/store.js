import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice } from '../features/authentication/authenticationSlice';
import { ordersSlice } from '../features/orders/ordersSlice';
import { usersSlice } from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    authentication: authenticationSlice.reducer,
    orders: ordersSlice.reducer,
  },
});