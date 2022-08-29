import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';
import CheckoutForm from './CheckoutForm';
import './Payment';

const stripePromise = loadStripe('pk_test_51Lc1THFBNcbcOSFgnXvCS7bux2hWNm5eciKIb0Z0zY3ttB1IQ1LAzTvG56ZdpDgBA1Jcx798WRokCB2o1CDI4LNj00gyfOYXnb');
const Payment = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [payOrder, setPayOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        setIsLoading(true)
        fetch(`http://localhost:5000/paymentOrders/${id}`)
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

                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm
                    // payOrder={payOrder}
                     />
                    </Elements> */}
              </div>
            </div>
          </div>
      </div>
    );
};

export default Payment;