import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useAuth();
    let {location} = useLocation();
    if(isLoading){
        return <Spinner/>
      }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;