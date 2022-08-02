import React from 'react';
import './AddPackages.css';
import { useForm } from "react-hook-form";

const AddPackages = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='add-pacakges-section'>
        <h2>Add Packages</h2>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
       <label>Name</label>
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
      
      <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddPackages;