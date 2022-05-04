import { configureStore } from '@reduxjs/toolkit';
import { authenticationSlice } from '../features/authentication/authenticationSlice';
import { usersSlice } from '../features/users/usersSlice';
import { ordersSlice } from '../features/orders/ordersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    authentication: authenticationSlice.reducer,
    orders: ordersSlice.reducer,
  },
});
