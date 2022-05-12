import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allcontext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allcontext}>

                {children}


            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;