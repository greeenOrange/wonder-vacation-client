import { faClock, faPerson, faShoePrints, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PackageBooking.css'

const PackageBooking = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});
    const [textfield, setText] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const { register, control, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const handleOnBlur = e =>{
      const field = e.target.value;
      setText(field);
    }
    const onSubmit = (data) => {
      const appointment = {
        details,
        textfield,
        data
      }
      data.status = "pending";
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(appointment),
      })
      .then((res) => res.json())
      .then(data => {
          if(data.insertedId){
            alert('successfully added');
          }
        })
        console.log(appointment);
        reset();
        navigate('/')
    };

    useEffect(() =>{
    fetch(`http://localhost:5000/packages/${id}`)
    // fetch(`https://rocky-dawn-55916.herokuapp.com/packages/${id}`)
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
                <h6>This is your id {details._id}</h6>
                <h3>Book This Tour <span><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/fa314a/external-dollar-banking-and-finance-kiranshastry-lineal-kiranshastry-6.png"/>{details.price}</span></h3>
                    <div className="user-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='Your Full Name' {...register("fullName")} />
      {errors.fullName?.type === 'required' && "full name is required"}

      <input placeholder='Your Email' {...register("email")} />
      {errors.email?.type === 'required' && "email is required"}

      <input type="number" placeholder='Phone' {...register("phoneNumber")} />
      {errors.phoneNumber?.type === 'required' && "phoneNumber is required"}
      
      <Controller
        name="ticketType"
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
                     onBlur={handleOnBlur}
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