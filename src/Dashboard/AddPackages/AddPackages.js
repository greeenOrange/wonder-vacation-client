import React from 'react';
import './AddPackages.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddPackages = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      axios.post('https://wondervacationserver-production.up.railway.app/addPackage', data)
      .then(res=> {
        if(res.data.insertedId){
          Swal.fire(
            'Success',
            'Your file has been Added.',
            'success'
          )
      }
      })
      .catch(function (error) {
        
      });
    }
    return (
        <div className='add-pacakges-section'>
        <h2>Add Packages</h2>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
       <label>Package Name</label>
      <input {...register("name", { required: true })} />
      {errors.name?.type === 'required' && <p>Name is required</p>}
      <label>Place Name</label>
      <input {...register("placeName", { required: true })} />
      {errors.placeName && <p>Place name is required</p>}
      <label>Time</label>
      <input {...register("time", { required: "Time is required" })} />
      <p>{errors.time?.message}</p>
        <label>Price</label>
      <input {...register("price", { required: "Price is required" })} />
      <p>{errors.price?.message}</p>
        <label>Rating</label>
        <input type="number" {...register("rating", { required: "Rating is required" })} />
      <p>{errors.rating?.message}</p>
        <label>Reviews</label>
      <input type='number' {...register("reviews", { required: "Reviews is required" })} />
      <p>{errors.reviews?.message}</p>
      
      <button type="submit">Add File <i class="fas fa-paper-plane"></i></button>
    </form>
            </div>
        </div>
    );
};

export default AddPackages;