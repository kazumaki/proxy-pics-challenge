import { createUserFailure, createUserStart, createUserSuccess, fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from "./usersSlice";
import axios from "axios";
import { setCurrentUserId } from "../authentication/authenticationSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersStart());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users`);
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
}

export const CreateUser = (name) => {
  return async (dispatch) => {
    dispatch(createUserStart());
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users`, { user: { name } });
      dispatch(createUserSuccess(response.data));
      dispatch(setCurrentUserId(response.data.user.id));
    } catch (error) {
      dispatch(createUserFailure(error));
    }
  }
}
