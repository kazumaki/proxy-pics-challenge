import {API_URL} from "@env"
import axios from "axios"
import { fetchOrdersFailure, fetchOrdersStart, fetchOrdersSuccess } from "./ordersSlice";

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

export const updateOrder = (orderId, photos) => {
  return async (dispatch, getState) => {
    dispatch(updateOrderStart());
    try {
      const response = await ordersAPI.put(`/${orderId}`, { order: { photos } }, getHeaders(getState()));
      dispatch(updateOrderSuccess(response.data));
    } catch (error) {
      dispatch(updateOrderFailure(error));
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