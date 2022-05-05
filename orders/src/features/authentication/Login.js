import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../users/UsersList';
import { setCurrentUserId } from './authenticationSlice';
import { Navigate } from "react-router-native";

const Login = ({users, currentUserId}) => {
  const isAuthenticated = currentUserId !== null;
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
    <View>
      <Text>Login</Text>
      <UsersList users={users} handleOnChangeUser={setCurrentUser} currentSelected={currentUser} />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

export default Login;