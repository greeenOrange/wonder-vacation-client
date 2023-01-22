import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';
import './CheckoutFrom.css'

const CheckoutForm = ({payOrder}) => {
    const {_id, fullname, price, Place_name} = payOrder;
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')


    useEffect(() => {
        fetch('https://wondervacationserver-production.up.railway.app/create-payment-intent', {
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
              })
              .catch(error => (console.log(error)));
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
    const {error} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setError(error?.message || '')
    setSuccess('')
    setIsLoading(true)
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
      setSuccess('Congrats! Payment successfully completed')
      // Save to Database
      const payment = {
        payOrder: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://wondervacationserver-production.up.railway.app/paymentOrders/${_id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
      })
      .catch(error => (console.log(error)));
    }
  };
    return (
        <div className='checkout-form-section'>
			<div class="card mx-auto">
				<p class="heading">PAYMENT DETAILS</p>
					<form class="card-details" onSubmit={handleSubmit}>

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
        {!success && <button type="submit" class="btn btn-primary my-4" disabled={!stripe || !clientSecret}>$ {price}<i class="fas fa-arrow-right px-2 py-2"></i></button>}
        {success && <></>}
					</form>
			</div>

      {error? <p className='text-center mx-auto'>
      <span className='text-danger'>{error}</span></p>:
      <div className='text-center mx-auto text-dark'>
        <p className='text-success'>{success}</p>
             </div>
          }
          {
            transactionId && <p>Your Transition ID: 
            <span className='fw-bold text-secondary'>{transactionId}</span></p>
          }

        </div>
    );
};

export default CheckoutForm;