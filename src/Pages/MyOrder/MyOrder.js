import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import OrdersSkelition from '../Shared/Spinner/OrdersSkelition';
import  './MyOrder.css'

const MyOrder = () => {
const {user} = useAuth();
const [orders, setOrders] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isDeleted, setIsDeleted] = useState(false);

// get all the orders
 useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setOrders(data);
  
          });
      }, [user?.email]);

      useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
  // delete a order
  const handelCancel = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You Want to Delete it!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      })
  
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                setIsDeleted(data);
                window.location.reload();
              }
            })
            .finally(() => {
              setIsDeleted(false);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

    return (
        <div className='order-section mt-3'>
            <div className="container">
              <div className="row">
            {orders?.map((pd, index) => 
              isLoading ? (
                <OrdersSkelition key={index} />
              ) : (
             <div key={index} className="col-md-12 col-lg-6 ">
           <div className='order-wrapper shadow-sm p-3 mb-5 bg-body rounded'>
           <div className='order-card'>
           <div className='order-image'>
           <img src={pd?.images} className="card-img-top" alt="..." />
           </div>
           <div className="order-card-body">
             <h3 className="fs-6">{pd?.place_name}</h3>
             <h5 className='fs-6'>Price: <span className='fw-bold'>{pd.price}</span> <span className='order-status'>{pd?.status}</span></h5>
             <h5 className='fs-6'>time: {pd.time}</h5>
             <h6 className='fs-6'>Phone: {pd?.phone}</h6>
             <h6 className='fs-6'>ticketType: {pd?.ticketType?.value} <span className='d-block'>label: {pd?.ticketType?.label}</span></h6>
             <h6 className='fs-6'>Adult: {pd?.adult?.value} <span className='d-block'>label: {pd?.adult?.label}</span></h6>
             <h6 className='fs-6'>Teen: {pd?.teen?.value} <span className='d-block'>label: {pd?.teen?.label}</span></h6>
             <p>Data:</p>
           </div>
           </div>
           <div className='order-button'>
           <button
               className="btn btn-danger"
               onClick={() => handelCancel(pd?._id)}
             >
               Cancel
             </button>
           <div className="btn btn-success paybtn d-block">
              {(pd.price && !pd.paid) && <Link to={`/payment/${pd._id}`}>Process to Pay</Link>}
              {(pd.price && pd.paid) && <p className='text-success fs-4'>Paid</p>}
           </div>
           </div>
           </div>
           </div>
           )          
            
          )}
</div>
{orders.length === 0 && (
          <p className="fs-4 text-center d-block">You have no orders to view.</p>
            )}
</div>
        </div>
    );
};

export default MyOrder;