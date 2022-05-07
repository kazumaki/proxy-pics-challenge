/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthenticateRoute from './src/features/authentication/AuthenticateRoute';
import Login from './src/features/authentication/Login';
import { View, Text, BackHandler } from 'react-native';
import { NativeRouter, Route, Routes, useNavigate } from "react-router-native";
import { fetchUsers } from './src/features/users/usersAPI';
import Orders from './src/features/orders/Orders';
import _ from 'lodash';
import { fetchOrders } from './src/features/orders/ordersAPI';
import SendPhoto from './src/features/orders/SendPhoto';

const App = () => {
  const {users, authentication, orders} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        navigate(-1);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if(authentication.currentUserId) {
      dispatch(fetchOrders());
    }
  }, [dispatch, authentication.currentUserId])

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <View>
      <Routes>
        <Route path="/" 
          element={
            <AuthenticateRoute currentUserId={authentication.currentUserId} component={<Orders orders={_.values(orders.orders)} />} />
          }
        />
        <Route path="/login" element={<Login users={users.users} currentUserId={authentication.currentUserId} />} />
        <Route path="/orders/:orderId/send-photo" element={
          <AuthenticateRoute currentUserId={authentication.currentUserId} component={<SendPhoto />} />
        } />
      </Routes>
    </View>
  );
}


export default App;
