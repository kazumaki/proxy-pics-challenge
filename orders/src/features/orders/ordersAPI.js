import {API_URL} from "@env"
import axios from "axios"
import { fetchOrderFailure, fetchOrdersFailure, fetchOrdersStart, fetchOrdersSuccess, fetchOrderStart, fetchOrderSuccess, updateOrderFailure, updateOrderStart, updateOrderSuccess } from "./ordersSlice";

export const ordersAPI = axios.create({
  baseURL: `${API_URL}/api/v1/orders`,
});

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(fetchOrdersStart());
    try {
      const response = await ordersAPI.get("", getHeaders(getState()));
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrdersFailure(error.message));
    }
  } 
}

export const updateOrder = ({orderId, formData}) => {
  return async (dispatch, getState) => {
    dispatch(updateOrderStart());
    try {
      const response = await ordersAPI.put(`/${orderId}`, formData, getHeaders(getState(), true));
      dispatch(updateOrderSuccess(response.data));
    } catch (error) {
      dispatch(updateOrderFailure(error));
    }
  }
}

export const fetchOrder = (orderId) => {
  return async (dispatch, getState) => {
    dispatch(fetchOrderStart());
    try {
      const response = await ordersAPI.get(`/${orderId}`, getHeaders(getState()));
      dispatch(fetchOrderSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrderFailure(error));
    }
  }
}

export const getOrder = (state, orderId) => {
  return state.orders.orders[orderId];
}

const getHeaders = (state, formData) => {
  return {
    headers: { 
      Authorization: `Bearer ${state.authentication.currentUserId}`,
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    }
  }
}