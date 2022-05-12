import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

const { user, isLoading } = useAuth();
  let {location} = useLocation();

  if(user?.email){

    return children;
  }
  return <Navigate to="/login" replace state = {{from: location}}/>;
};

export default PrivateRoute;