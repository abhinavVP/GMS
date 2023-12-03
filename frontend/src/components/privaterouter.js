// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, authenticated, redirectTo = '/signin' }) => {
  return authenticated ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
