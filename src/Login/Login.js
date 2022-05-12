import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle, user, handleUserLogin, signInWithFacebook, logout} = useAuth();
    console.log(user);
    const [loginData, setLoginData] = useState({});
    const { register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation();


    const handleOnChange = e =>{
        const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
};
    const handleLoginSubmit = e => {
        handleUserLogin(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }
    const handleGoogleSignIn = (e) =>{
        signInWithGoogle(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
    }
    const handleFacebookSignIn = e =>{
        signInWithFacebook(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
    }
    const signOut = () =>{
        logout()
    }
    return (
    //     <div>   
    // <button onClick={handleGoogleSignIn} className='btn btn-success' type="submit">Google signIn</button>
    //     </div>
        <div className='login-page'>
            <div className='login-form'>
        <div className="container">
            <div className="row bg-light p-3 h-50 rounded">
        <h2>Sign In</h2>
                <div className="col">
                <form onSubmit={handleLoginSubmit}>
    {/* register your input into the hook by invoking the "register" function */}
    <p>Username</p>
    <i class="fa-solid fa-user"></i>
    <input type="email" {...register("email")} placeholder='Type your username' onChange={handleOnChange}/>

    {/* include validation with required or other standard HTML validation rules */}
    <p>Password</p>
    <i class="fa-solid fa-lock"></i>
    <input type="password" {...register("password", { required: true })} placeholder='Type your password' onChange={handleOnChange}/>
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}

    <input type="submit"/>
    </form>
    <div className='easy-login m-a text-center d-block'>
        <p>Or Sign Up </p>
        <ul className='social-login'>
            <li><a href="" onClick={handleFacebookSignIn} type="submit"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="" onClick={handleGoogleSignIn} type="submit"><i class="fa-brands fa-google"></i></a></li>
        </ul>
    </div>
        <p className='m-a text-center d-block'>Or New Member? <span><Link href="" to='/register'>signup now</Link></span></p>
                </div>
            </div>
        </div>
        
    </div>
        </div>
    );
};

export default Login;