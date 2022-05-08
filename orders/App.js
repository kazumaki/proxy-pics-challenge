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
import { View, BackHandler, StyleSheet } from 'react-native';
import {  Route, Routes, useNavigate } from "react-router-native";
import { fetchUsers } from './src/features/users/usersAPI';
import Orders from './src/features/orders/Orders';
import { fetchOrders, getOrders } from './src/features/orders/ordersAPI';
import SendPhoto from './src/features/orders/SendPhoto';
import OrderDetails from './src/features/orders/OrderDetails';
import Header from './src/features/header/Header';

const App = () => {
  const {users, authentication, orders} = useSelector(state => state);
  const ordersList = useSelector(state => getOrders(state, orders.orderBy, orders.orderOrder));
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
    <View style={styles.container}>
      <Header currentUserId={authentication.currentUserId} />
      <Routes>
        <Route path="/" 
          element={
            <AuthenticateRoute 
              currentUserId={authentication.currentUserId} 
              component={<Orders orders={ordersList} loading={orders.loading} orderBy={orders.orderBy} orderOrder={orders.orderOrder} />} 
            />
          }
        />
        <Route path="/login" element={<Login users={users.users} currentUserId={authentication.currentUserId} />} />
        <Route path="orders">
          <Route path=":orderId">
            <Route path="" element={
              <AuthenticateRoute currentUserId={authentication.currentUserId} component={<OrderDetails />} />
            } />
            <Route path="send-photo" element={
              <AuthenticateRoute currentUserId={authentication.currentUserId} component={<SendPhoto loading={orders.loading} />} />
            } />
          </Route>
        </Route>
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
