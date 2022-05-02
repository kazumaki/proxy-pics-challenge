import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const AuthenticateRoute = ({component}) => {
  const isAuthenticated = useSelector(state => state.authentication.currentUserId !== null);

  return isAuthenticated ? component : <Navigate to="/login" />;
}

export default AuthenticateRoute;