// PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

 

 
 
 

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authState = useSelector((state: RootState) => state.auth);
  const isAuthenticated = Boolean(authState.token);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

