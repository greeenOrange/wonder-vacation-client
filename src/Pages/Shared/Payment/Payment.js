import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import useAuth from '../../../Hook/useAuth';
import './Payment.css';

const Payment = () => {
    const {user} = useAuth();
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [user?.email])
    console.log(user.email);
    console.log(order);
    

      const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
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
                      <h6>Package ID: {pd._id}</h6>
                      <img width='300px' src={pd?.details?.image} alt="" />
                      <h4>Booked Place: {pd?.details?.Place_name}</h4>
                      <h6>Adult: {pd?.data?.adult?.value} & Teen: {pd?.data?.teen?.value}</h6>
                      <h6>Ticket Type: {pd?.data?.ticketType?.value}</h6>
                      <h5>Price: ${pd?.details?.price}</h5>
                      <button
                      onClick={() => handleDelete(pd?._id)} 
                      className="btn bg-danger p-2">Delete</button>
              </div>
                  ))}
            </div>
          </div>
      </div>
    );
};

export default Payment;