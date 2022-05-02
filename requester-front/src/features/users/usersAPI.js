import { fetchUsersFailure, fetchUsersStart, fetchUsersSuccess } from "./usersSlice";
import axios from "axios";

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