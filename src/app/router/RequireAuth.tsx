import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<any> = ({ children }) => {
  const token = "1";

  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
