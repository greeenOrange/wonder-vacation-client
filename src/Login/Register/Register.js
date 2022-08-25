import React, { useState } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, handleUserRegister, isLoading } = useAuth();
    const { register, formState: { errors }, reset } = useForm();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
}

const handleLoginSubmit = e => {
    if(loginData.password !== loginData.password2){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    handleUserRegister(loginData.email, loginData.password, loginData.firstname, loginData.lastname);
    console.log(loginData.email, loginData.password, loginData.firstname, loginData.lastname);
    e.preventDefault();
    reset()
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
    <input {...register("firstname", { required: true })} placeholder='First name' onChange={handleOnChange}/>
      {errors.firstName?.type === 'required' && "First name is required" }
      
      <input {...register("lastname", { required: true })} placeholder='Last name' onChange={handleOnChange}/>
      {errors.lastname && "Last name is required" && "Last name is required"}
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
        {isLoading && <Spinner />}
            {user?.email && <p className="text-success">
            successfully Register—check it out!
            </p>}
            {authError &&  <p className="text-danger">
            Unsuccessfully Register—check it out!
            </p>}
                </div>
            </div>
        </div>
        
    </div>
        </div>
    );
};

export default Register;