import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import './Review.css'

const Review = () => {
    const {user} = useAuth();
    const [review, setReview] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleRating = e =>{
        setReview(e);
    }
    const onSubmit = (data) =>{
        const reviewAdded = {...data,
            review
        };
        // SEND to the server
        axios.post('https://wonder-vacation-server.up.railway.app/users/review', reviewAdded)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Packages has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            reset();
            Navigate('/')
          }else{
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Please Login",
              footer: '<a href="/login">login</a>',
              showConfirmButton: false,
            });
          }
  
        })
      }
    return (
        <div className='review-conainer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 review-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {user?.photoURL && <img src={user?.photoURL} alt="" width="100" height="80" />}
      <input placeholder='name' defaultValue={user?.displayName
} {...register("name", { required: true })}/>
      <input placeholder='email' defaultValue={user?.email} {...register("email", { required: true })} />
     {!user?.photoURL && <label for="avatar">Choose a profile picture:</label>}
      {!user?.photoURL && <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" />}
      <input placeholder='profession' {...register("profession", { required: true })} />
      {errors.profession && <span>This field is required</span>}
      <textarea
                    placeholder='Your Massage'       
                    type="text"
                    rows="4" cols="40"
                     {...register("textField")}
                      >
               </textarea>
               <Rating
                    onChange={handleRating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    fractions={2}
                    ></Rating>
      <input type="submit" />
    </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Review;