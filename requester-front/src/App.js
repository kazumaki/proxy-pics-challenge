import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './features/header/Header';
import UsersList from './features/users/UsersList';
import { fetchUsers } from './features/users/usersAPI';
import Orders from './features/orders/Orders';
import AuthenticateRoute from './features/authentication/AuthenticateRoute';
import Login from './features/authentication/Login';

function App() {
  const { authentication, users, orders } = useSelector(state => state);

  return (
    <div>
      <Header currentUserId={authentication.currentUserId}/>
      <Router>
        <Routes>
          <Route path="/" element={
            <AuthenticateRoute component={
              <Orders 
                users={users.users}
                orders={orders.requesterOrders}
                currentUserId ={authentication.currentUserId} />
            } />
          } />
          <Route path="/login" element={<Login users={users.users} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
