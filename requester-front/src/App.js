import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './features/header/Header';
import { fetchUsers } from './features/users/usersAPI';
import Orders from './features/orders/Orders';
import AuthenticateRoute from './features/authentication/AuthenticateRoute';
import Login from './features/authentication/Login';
import { fetchOrders, getOrders } from './features/orders/ordersAPI';
import Order from './features/orders/Order';
import style from './app.module.css';
import Signup from './features/authentication/Signup';

function App() {
  const { authentication, users, orders } = useSelector(state => state);
  const ordersList = useSelector(state => getOrders(state, orders.orderBy, orders.orderOrder));

  const dispatch =  useDispatch();

  useEffect(() => {
    if(authentication.currentUserId) {
      dispatch(fetchOrders());
    }
  }, [dispatch, authentication.currentUserId])

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <div className={style.mainContainer}>
      <Header currentUserId={authentication.currentUserId}/>
      <div className={style.contentContainer}>
        <Router>
          <Routes>
            <Route path="/" element={
              <AuthenticateRoute component={
                <Orders
                  currentUser={users.users.find(user => user.id === Number(authentication.currentUserId))}
                  users={users.users}
                  orders={ordersList}
                  orderBy={orders.orderBy}
                  orderOrder={orders.orderOrder}
                />
              } />
            } />
            <Route path="/orders/:orderId" element={
              <AuthenticateRoute component={
                <Order loading={orders.loading} users={users.users} />
              } />
            } />
            <Route path="/login" element={<Login users={users.users} />} />
            <Route path="/signup" element={<Signup loading={users.loading} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
