import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hook/useAuth';
import CheckoutForm from './CheckoutForm';
import './Payment.css';
const stripePromise = loadStripe('pk_test_51Jw4F4HOXxFLrNqID8V8nKHk7qNrnMtIhZvWobJL8NVyFxnA57uRknnBlVUurwU9STeV5ugF1UaoNvfEMd9FKwih00HXfpJxCA');

const Payment = () => {
    const {user} = useAuth();
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('idToken')}`
          }
        })
        .then(res => {
          if(res.status === 200){
            return res.json()
          }else if(res.status === 401){
            navigate("/login");
          }
        })
        .then(data => setOrder(data))
    }, [user?.email]) 

    // const handleDelete = id => {
    //   const proceed = window.confirm('Are you sure, you want to delete?');
    //   if (proceed) {
    //       const url = `http://localhost:5000/order/${id}`;
    //       fetch(url, {
    //           method: 'DELETE'
    //       })
    //           .then(res => res.json())
    //           .then(data => {
    //               if (data.deletedCount > 0) {
    //                   alert('deleted successfully');
    //                   const remainingUsers = order.filter(order => order._id !== id);
    //                   setOrder(remainingUsers);
    //               }
    //           });
    //   }

    // } 

    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to delete?');
      if (proceed) {
          const url = `http://localhost:5000/orders/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                      const remainingUsers = order.filter(order => order._id !== id);
                      setOrder(remainingUsers);
                  }
              });
      }

    } 

    return (
      <div className='payment'>
          <div className="container">
            <div className="row">
                {
                  order?.map ((pd,index) =>(
                    
              <div className="col-md-6">
                      { user.email?

                       <div>
                       <h6>Package ID: {pd._id}</h6>
                      <img width='300px' src={pd?.details?.image} alt="" />
                      <h4>Booked Place: {pd?.details?.Place_name}</h4>
                      <h6>Adult: {pd?.data?.adult?.value} & Teen: {pd?.data?.teen?.value}</h6>
                      <h6>Ticket Type: {pd?.data?.ticketType?.value}</h6>
                      <h5>Price: ${pd?.details?.price}</h5>
                      <button
                      onClick={() => handleDelete(pd?._id)} 
                      className="btn bg-danger p-2">Delete</button>
                       </div>:<p>Please order</p>
                      }
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    
                    order={order}
                     />
                    </Elements>
              </div>
                  ))}
            </div>
          </div>
      </div>
    );
};

export default Payment;