import React from "react";
import { Navigate } from "react-router-dom";

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const SecureRoute = ({ children }) => {
  const token = getCookie("jwtToken");
  return token ? children : <Navigate to="/" />;
};

export default SecureRoute;
