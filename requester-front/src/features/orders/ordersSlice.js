import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.loading = true;
    },

    fetchOrdersSuccess: (state, action) => {
      state.orders = _.keyBy(action.payload.requester_orders, "id");
      state.loading = false;
    },

    fetchOrdersFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    fetchOrderStart: (state) => {
      state.loading = true;
    },

    fetchOrderSuccess: (state, action) => {
      const order = action.payload;
      state.orders[order.id] = order;
      state.loading = false;
    },

    fetchOrderFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    createOrderStart: (state) => {
      state.loading = true;
    },

    createOrderSuccess: (state, action) => {
      state.requesterOrders.push(action.payload);
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
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFailure,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
} = ordersSlice.actions;
