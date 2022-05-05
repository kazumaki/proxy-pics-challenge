import React from 'react';
import { Navigate } from 'react-router-native'

const AuthenticateRoute = ({component, currentUserId}) => {
  const isAuthenticated = currentUserId !== null;

  return isAuthenticated ? component : <Navigate to="/login" />;
}

export default AuthenticateRoute;