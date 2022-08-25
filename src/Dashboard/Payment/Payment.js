import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';

import './Payment.css';
const stripePromise = loadStripe('pk_test_51Jw4F4HOXxFLrNqID8V8nKHk7qNrnMtIhZvWobJL8NVyFxnA57uRknnBlVUurwU9STeV5ugF1UaoNvfEMd9FKwih00HXfpJxCA');

const Payment = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [payOrder, setPayOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    console.log(payOrder._id);
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
      setIsLoading(true)
      fetch(`http://localhost:5000/orders/${id}`)
      .then(res => res.json())
      .then(data => setPayOrder(data))
      .finally(() =>{
        setIsLoading(false)
      })
  },[id]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders?email=${user?.email}`, {
    //       headers: {
    //         'authorization': `Bearer ${localStorage.getItem('idToken')}`
    //       }
    //     })
    //     .then(res => {
    //       if(res.status === 200){
    //         return res.json()
    //       }else if(res.status === 401){
    //         navigate("/login");
    //       }
    //     })
    //     .then(data => setOrder(data))
    // }, [user?.email]) 

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
                      const remainingUsers = payOrder.filter(order => order._id !== id);
                      setPayOrder(remainingUsers);
                  }
              });
      }

    } 

    return (
      <div className='payment'>
          <div className="container">
            <div className="row">                    
              <div className="col-md-6">
                       <div>
                       <h6>Package ID: {payOrder._id}</h6>
                        <h2>Hi ! {payOrder?.fullname}</h2>
                      <h4>Booked Place: {payOrder?.Place_name}</h4>
                      <h5>time {payOrder?.time}</h5>
                      <h5>Price: ${payOrder?.price}</h5>
                      <button
                      onClick={() => handleDelete(payOrder?._id)} 
                      className="btn bg-danger p-2">Delete</button>
                       </div>

                <Elements stripe={stripePromise}>
                    {/* <CheckoutFor
                    order={payOrder}
                     /> */}
                    </Elements>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Payment;