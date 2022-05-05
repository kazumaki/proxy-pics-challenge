/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './src/features/users/UsersList';
import AuthenticateRoute from './src/features/authentication/AuthenticateRoute';
import Login from './src/features/authentication/Login';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import { fetchUsers } from './src/features/users/usersAPI';

const App = () => {
  const {users, authentication} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(authentication.currentUserId) {
      // dispatch(fetchOrders());
    }
  }, [dispatch, authentication.currentUserId])

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <NativeRouter>
      <View>
        <Routes>
          <Route path="/" 
          element={
          <AuthenticateRoute currentUserId={authentication.currentUserId} component={<View><Text>TEst</Text></View>}
          />
          }
        />
        <Route path="/login" element={<Login users={users.users} currentUserId={authentication.currentUserId} />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}


export default App;
