import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    requesterOrders: [],
    assigneeOrders: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.loading = true;
    },

    fetchOrdersSuccess: (state, action) => {
      state.requesterOrders = action.payload.requesterOrders;
      state.assigneeOrders = action.payload.assigneeOrders;
      state.loading = false;
    },

    fetchOrdersFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    createOrderStart: (state) => {
      state.loading = true;
    },

    createOrderSuccess: (state, action) => {
      state.orders.push(action.payload);
      state.loading = false;
    },

    createOrderFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { 
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
} = ordersSlice.actions;
