import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserId } from "./authenticationSlice";
import UsersList from "../users/UsersList";
import { Navigate } from "react-router-dom";
import style from "./login.module.css";

const Login = ({users}) => {
  const isAuthenticated = useSelector(state => state.authentication.currentUserId !== null);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if(users.length > 0) setCurrentUser(users[0].id);
  }, [users]);

  const onLogin = () => {
    dispatch(setCurrentUserId(currentUser));
  }

  if(isAuthenticated) return <Navigate to="/"/>;

  return (
    <div className={style.container}>
      <h2>Login</h2>
      <UsersList users={users} handleOnChangeUser={setCurrentUser} currentSelected={currentUser} />
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default Login;