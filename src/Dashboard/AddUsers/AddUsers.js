import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Addusers.css'

const AddUsers = () => {
    const [email, setEmail] = useState('');
    // const [name, setName] = useState("");
    const [authError, setAuthError] = useState("");
    const { register, formState: { errors }, handleSubmit, clearErrors, reset  } = useForm();
    const handleOnChange = (e) =>{
        // setName(e.target.value)
        setEmail(e.target.value);
    }
    const onSubmit = (data) =>{
        const user = {email}
        fetch('https://fierce-falls-08266.herokuapp.com/addusers', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Success',
                    'Your file has been Added.',
                    'success'
                  )
              }
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message)
            console.log(error.message);
          }).finally(() =>{
            reset()
        })
    }
    return (
        <div className='add-users-section'>
          <h2>Add users</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input placeholder="Name" {...register("Name", {required: true, maxLength: 100})} onBlur={handleOnChange} />
      <p>{errors.name?.message}</p> */}
      <input placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} onBlur={handleOnChange} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form> 
    <div className="message">{authError ? <p>{authError}</p> : <p></p>}</div> 
        </div>
    );
};

export default AddUsers;