import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';


const Login = () => {
    const {signInWithGoogle, user, handleUserLogin, handleUserRegister, logout} = useFirebase();
    const [loginData, setLoginData] = useState({});
    const { register, watch, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate()
    

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
};
    const handleSubmit = e => {
        handleUserLogin(loginData.email, loginData.password, navigate)
        e.preventDefault();
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, navigate)
        
    }
    const signOut = () =>{
        logout()
    }
    return (
        <div>   
    <button onClick={handleGoogleSignIn} className='btn btn-success' type="submit">Google signIn</button>
        </div>
    );
};

export default Login;