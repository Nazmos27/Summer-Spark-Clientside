import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
import { useLoaderData } from 'react-router-dom'
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    const data = useLoaderData()
    // console.log(data);
    const {price,_id,name} = data
  return (
    <div>
        <p>This is pyment Page</p>
        <Elements stripe={stripePromise}>
            <CheckoutForm price={price} id={_id} name={name}></CheckoutForm>
        </Elements>
    </div>
  )
}

export default Payment