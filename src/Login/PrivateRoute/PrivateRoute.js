import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (!user?.displayName) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;