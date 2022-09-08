import React, { useState } from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleOnChange = (e) =>{
        setEmail(e.target.value)
    }
    const onSubmit = (data) =>{
        const user = {email}
        fetch('https://fierce-falls-08266.herokuapp.com/users/makeadmin', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
        })
        .catch(error => (console.log(error)));
    }
    
    return (
        <div className='admin-section'>
            <h2>Make a user as Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("mail", { required: "Email Address is required" })} onBlur={handleOnChange} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default MakeAdmin;