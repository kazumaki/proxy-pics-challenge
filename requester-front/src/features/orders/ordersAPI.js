import axios from "axios";
import { createOrderFailure, createOrderStart, createOrderSuccess, fetchOrdersFailure, fetchOrdersStart, fetchOrdersSuccess } from "./ordersSlice";


const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(fetchOrdersStart());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/orders`, getHeaders(getState()));
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrdersFailure(error));
    }
  }
}

const fetchOrder = (orderId) => {
  return async (dispatch, getState) => {
    dispatch(fetchOrdersStart());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/orders/${orderId}`, getHeaders(getState()));
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrdersFailure(error));
    }
  }
}

const createOrder = (order) => {
  return async (dispatch, getState) => {
    dispatch(createOrderStart());
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/orders`, {order}, getHeaders(getState()));
      dispatch(createOrderSuccess(response.data));
    } catch (error) {
      dispatch(createOrderFailure(error));
    }
  }
}

const getHeaders = (state) => {
  return {
    headers: { 
      Authorization: `Bearer ${state.authentication.currentUserId}`
    }
  }
}

export { fetchOrders, fetchOrder, createOrder };