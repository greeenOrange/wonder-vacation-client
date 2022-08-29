import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';

const CheckoutForm = ({payOrder}) => {
    const {fullname, email, price, place_name} = payOrder;
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
            .then(res =>  res.json())
            .then(data => {
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret);
                }
                console.log(data.clientSecret);
              });
    }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setError(error?.message || '')
    setSuccess('')
    // confirm Card Pyament
    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: fullname,
            email: user.email,
          },
        },
      },
    );
    if(intentError){
      setError(intentError?.message);
      success('');
    }else{
      setError('');
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent);
      setSuccess('Congrats! Payment successfully completed')
      // Save to Database
    }
  };
    return (
        <div>
          <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
          {
            error? <p className='text-center mx-auto'><span className='text-danger'>{error}</span></p>: <div className='text-center mx-auto text-dark'>Pamyent status: 
            <p className='text-success'>{success}</p>
             </div>
          }
          {
            transactionId && <p>Your Transition ID: <span className='fw-bold text-secondary'>{transactionId}</span></p>
          }
        </div>
    );
};

export default CheckoutForm;