import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Spinner from '../Pages/Shared/Spinner/Spinner';
import './Login.css'

const Login = () => {
    const {signInWithGoogle, user, handleUserLogin, signInWithFacebook, signInWithTwitter, logout, authError, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});
    const { register, formState: { errors }, reset } = useForm();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    const handleOnChange = e =>{
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[field] = value;
            setLoginData(newLoginData)
};
    const handleLoginSubmit = (e) => {
        handleUserLogin(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
        navigate(from, {replace: true})
        reset()
    }
    const handleGoogleSignIn = (e) =>{
        signInWithGoogle(loginData.email,loginData.password, location, navigate);
        e.preventDefault();
        navigate(from, {replace: true})
    }
    const handleFacebookSignIn = e =>{
        signInWithFacebook(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
        navigate(from, {replace: true})
    }
    const handleTwitterSignIn = e =>{
        signInWithTwitter(loginData.email,loginData.password,location,navigate);
        e.preventDefault();
        navigate(from, {replace: true})
    }
    const signOut = () =>{
        logout()
    }
    return (
        <div className='login-page'>
            <div className='login-form'>
        <div className="container">
            <div className="row bg-light p-3 h-50 rounded">
        <h2>Sign In</h2>
                <div className="col">
                <form onSubmit={handleLoginSubmit}>
    <p>UserEmail</p>
    <i className="fa-solid fa-envelope-open"></i>
    <input type="email" {...register("email")} placeholder='Type your Email' onChange={handleOnChange}/>

    <p>Password</p>
    <i className="fa-solid fa-lock"></i>
    <input type="password" {...register("password", { required: true })} placeholder='Type your password' onChange={handleOnChange}/>
    {errors.exampleRequired && <span>This field is required</span>}

    {isLoading && <Spinner/>}
            {user?.email && <p className="text-success mt-2">
            This is a success alert—check it out!
            </p>}
            {authError &&  <p className="text-danger mt-2">
            This is a danger alert—check it out!
            </p>}
    <input type="submit"/>
    </form>
    <div className='easy-login m-a text-center d-block'>
        <p>Or Sign Up </p>
        <ul className='social-login'>
            <li><Link to="" onClick={handleFacebookSignIn} type="submit"><i className="fa-brands fa-facebook"></i></Link></li>
            <li><Link to="" onClick={handleTwitterSignIn} type="submit"><i className="fa-brands fa-twitter"></i></Link></li>
            <li><Link to="" onClick={handleGoogleSignIn} type="submit"><i className="fa-brands fa-google"></i></Link></li>
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