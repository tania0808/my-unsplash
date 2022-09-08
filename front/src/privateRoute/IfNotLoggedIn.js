import React from "react";
import { Navigate } from "react-router-dom";

const IfNotLoggedIn = ({ children }) => {
  const jwt = localStorage.getItem("token");

  return jwt ? children : <Navigate to="/auth/login" />;
};

export default IfNotLoggedIn;
