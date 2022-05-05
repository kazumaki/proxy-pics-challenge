import {API_URL} from "@env"
import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from "./usersSlice"
import axios from "axios"

export const usersAPI = axios.create({
  baseURL: `${API_URL}/api/v1/users`,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersStart());
    try {
      const response = await usersAPI.get("");
      dispatch(fetchUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  } 
};
