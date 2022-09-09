import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';
import './Payment';
import './Payment.css'


const stripePromise = loadStripe('pk_test_51Lc1THFBNcbcOSFgnXvCS7bux2hWNm5eciKIb0Z0zY3ttB1IQ1LAzTvG56ZdpDgBA1Jcx798WRokCB2o1CDI4LNj00gyfOYXnb');
const Payment = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [payOrder, setPayOrder] = useState({});
    console.log(payOrder);
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        setIsLoading(true)
        fetch(`https://fierce-falls-08266.herokuapp.com/paymentOrders/${id}`)
        .then(res => res.json())
        .then(data => setPayOrder(data))
        .catch(error => (console.log(error)))
        .finally(() =>{
          setIsLoading(false)
        })
    },[id]);

    return (
        <div className='payment'>
          <div className="container">
            <div className="row">                    
              <div className="col-md-4">
                <div className='pay-summary'>
                  {isLoading && <Spinner/>}
                       <h6>Package ID: {payOrder._id}</h6>
                        <h3>Booking Summary</h3>
                      <h4>Place: <span>{payOrder?.place_name}</span></h4>
                      <h5>{payOrder?.time}</h5>
                      <h5 className='text-success'>Total Amount:<span className='fw-bold text-danger fs-4'>$ {payOrder?.price}</span></h5>
                </div>
                  </div>

                <div className="col-md-8">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    payOrder={payOrder}
                     />
                    </Elements>
                </div>
            </div>
          </div>
      </div>
    );
};

export default Payment;