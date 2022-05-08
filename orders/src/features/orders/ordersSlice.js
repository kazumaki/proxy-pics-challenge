import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: {},
    loading: false,
    orderBy: 'created_at',
    orderOrder: 'desc',
    error: null,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess: (state, action) => {
      state.orders = _.keyBy(action.payload.assignee_orders, 'id');
      state.loading = false;
    },
    fetchOrdersFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchOrderSuccess: (state, action) => {
      state.orders[action.payload.id] = action.payload;
      state.loading = false;
    },
    fetchOrderFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setOrderOrder: (state, action) => {
      state.orderOrder = action.payload;
    },
    updateOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateOrderSuccess: (state, action) => {
      state.orders = { ...state.orders, [action.payload.id]: action.payload };
      state.loading = false;
    },
    updateOrderFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFailure,
  setOrderBy,
  setOrderOrder,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
} = ordersSlice.actions;