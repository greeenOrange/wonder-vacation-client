import { faClock, faPerson, faShoePrints, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PackageBooking.css';
import axios from 'axios';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';


const PackageBooking = () => {
    const {id} = useParams();
    const {user} = useAuth()
    const [details, setDetails] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
   const bookingDate = startDate?.toLocaleDateString()
    // const { register, control,  handleSubmit, reset, formState: { errors } } = useForm();
    const { register, formState: { errors }, control, reset, handleSubmit } = useForm();

    const onSubmit = (data) =>{
      const bookingData = {...data, bookingDate};
      bookingData.images = details.image;
      bookingData.place_name = details.place_name;
      bookingData.price = details.price;
      bookingData.time = details.time;
      bookingData.email = user.email;
      bookingData.number = details.phone;
      bookingData.status = "pending"
      // SEND to the server
      axios.post('https://fierce-falls-08266.herokuapp.com/orders', bookingData)
      .then(res => {
        if(res.data.insertedId && user){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Packages has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          reset();
          navigate('/')
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

    useEffect(() =>{
    fetch(`https://fierce-falls-08266.herokuapp.com/packages/${id}`)
    
    .then(res => res.json())
    .then(data => setDetails(data))
},[id]);

    return (
        <div className='container my-4'>
        <div className="row">
              <div className="col-md-8">
                    <ul className='package-iteam'>
                        <li><FontAwesomeIcon icon={faClock} /></li>
                        <div className='me-md-5'>
                        <h5>Duration</h5><span>{details?.time}</span>
                        </div>
                        <li><FontAwesomeIcon icon={faShoePrints} /></li>
                        <div className='me-md-5'>
                        <h5>Tour Type</h5><span>Daily Tour</span>
                        </div>
                        <li><FontAwesomeIcon icon={faUsers} /></li>
                        <div className='me-md-5'>
                        <h5>Group Size</h5><span>30 People</span>
                        </div>
                        <li><FontAwesomeIcon icon={faPerson} /></li>
                        <div className='me-md-5'>
                        <h5>Tour Guide</h5><span>05 People</span>
                        </div>
                    </ul>
                    <div className="packages-details my-4">
                        <img src={details?.image} alt="" className='w-100 mt-3' />
                        <p>Name{details?.place_name}</p>
                        <h4><img src="https://img.icons8.com/color/48/000000/marker--v1.png"/> San Francisco Golden Gate Bridge.</h4>
                        <div className="package-discription">
                        <h3>Package Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo excepturi reiciendis amet! Quae, assumenda! Excepturi cumque nostrum accusamus eaque voluptatum!</p>
                        </div>
                    </div>
            </div>
            <div className="col-md-4">
                <div className="user-details">
                <h3>Book This Tour <span><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/fa314a/external-dollar-banking-and-finance-kiranshastry-lineal-kiranshastry-6.png"/>{details.price}</span></h3>
                    <div className="user-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='Your Full Name' {...register("fullname", { required: true })} />
      {errors.fullname?.type === 'required' && <p className='text-danger'>Your name is required</p>}

      <input placeholder='email' defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email?.type === 'required' && <p className='text-danger'>email is required</p>}

      <input type="number" {...register("phone", { required: true })} placeholder='Phone Number' />
      {errors.number?.type === 'required' && <p className='text-danger'>phone number is required</p>}
      
      <Controller
        name="ticketType"
        {...register("ticketType", { required: true })}
        onChange={([selected]) => console.log(selected)}
        render={({ field }) => (
          <Select
            {...field}
            
        placeholder="Tickets Type 1"
            options={[
              { value: "type-1", label: "Tickets Type 1" },
              { value: "type-2", label: "Tickets Type 2" },
              { value: "type-3", label: "Tickets Type 3" },
              { value: "type-4", label: "Tickets Type 4" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />
      {errors.ticketType?.type === 'required' && <p className='text-danger'>Ticket Type is required</p>}
    <div className='user-age'>
    <div className='adult'>
      <Controller
        name="adult"
        render={({ field }) => (
          <Select
            {...field}
            placeholder='Adult'
            options={[
              { value: "one", label: "1" },
              { value: "two", label: "2" },
              { value: "three", label: "3" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />
      </div>
      <div className='teen'>
      <Controller
        name="teen"
        render={({ field }) => (
          <Select
            {...field}
            placeholder='Child'
            options={[
              { value: "one", label: "1" },
              { value: "two", label: "2" },
              { value: "three", label: "3" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />
      </div>
    </div>

    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <h6>Date {startDate.toDateString()}</h6>
                <textarea
                    placeholder='Your Massage'       
                     type="text"
                     {...register("textField")}
                      >
               </textarea>
               <input className='btn btn-danger py-3' value="Book Now"  type="submit"/> 
    </form>
                    </div>
                </div>
            </div>
          

        </div>            
        </div>
        
        
    );

};

export default PackageBooking;