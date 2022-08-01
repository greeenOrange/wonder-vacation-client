import React, { useState } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';
import Spinner from '../../Pages/Shared/Spinner';
import { Alert } from 'bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, handleUserRegister, isLoading } = useAuth();
    console.log(user);
    const { register, formState: { errors } } = useForm();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
}

const handleLoginSubmit = e => {
    console.log(loginData.email);
    if(loginData.password !== loginData.password2){
        alert('your password did not match')
        return
    }
    handleUserRegister(loginData.email, loginData.password)
    e.preventDefault();
}
    return (
        <div className='register'>
            <div className='register-form'>
        <div className="container">
            <div className="row bg-light p-3 h-50 rounded">
        <h2>Register</h2>
                <div className="col">
                 <form onSubmit={handleLoginSubmit}>
    {/* register your input into the hook by invoking the "register" function */}
    <div className='d-flex align-center justify-center'>
    <input {...register("firstName", { required: true })} placeholder='First name' onChange={handleOnChange}/>
      {errors.firstName?.type === 'required' && "First name is required" }
      
      <input {...register("lastName", { required: true })} placeholder='Last name' onChange={handleOnChange}/>
      {errors.lastName && "Last name is required" && "Last name is required"}
    </div>
    
    <p>Email</p>
    <i className="fa-solid fa-envelope-open"></i>
    <input type="email" {...register("email")} placeholder='Type your Email' onChange={handleOnChange}/>

    {/* include validation with required or other standard HTML validation rules */}
    <p>Password</p>
    <i className="fa-solid fa-lock"></i>
    <input className="" type="password" placeholder="password" name="password" onChange={handleOnChange} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}
    <p>Password</p>
    <i className="fa-solid fa-lock"></i>
    <input className="" type="password" placeholder="Re-password" name="password2" onChange={handleOnChange} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}

    <input type="submit"/>
    </form>
               
        <p className='m-a text-center d-block'>Or Already Sign Up? <span><Link href="" to="/login">signup now</Link></span></p>
        {/* {isLoading && <Spinner/>}
            {user?.email && <Alert className="text-success">
            This is a success alert—check it out!
            </Alert>}
            {authError &&  <Alert className="text-danger">
            This is a danger alert—check it out!
            </Alert>} */}
                </div>
            </div>
        </div>
        
    </div>
        </div>
    );
};

export default Register;