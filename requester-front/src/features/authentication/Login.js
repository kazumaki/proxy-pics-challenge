import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserId } from "./authenticationSlice";
import UsersList from "../users/UsersList";
import { fetchUsers } from "../users/usersAPI";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuthenticated = useSelector(state => state.authentication.currentUserId !== null);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState("");
  const {users} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if(users.length > 0) setCurrentUser(users[0].id);
  }, [users]);

  const onLogin = () => {
    dispatch(setCurrentUserId(currentUser));
  }

  if(isAuthenticated) return <Navigate to="/"/>;

  return (
    <div>
      <h2>Login</h2>
      <UsersList users={users} handleOnChangeUser={setCurrentUser} currentSelected={currentUser} />
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default Login;