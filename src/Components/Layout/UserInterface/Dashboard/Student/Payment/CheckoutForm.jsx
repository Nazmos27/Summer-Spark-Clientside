import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useAuth from '../../../../../Hooks/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'

const CheckoutForm = ({ price,id,name }) => {

    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const token = localStorage.getItem('access-token')

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing,setProcessing] = useState(false)
    const [transactionId,setTransactionId] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify({ price: price }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClientSecret(data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        console.log('card', card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('paymentMethod', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            //saving payment info to the server
            const paymentInfo = {
                email : user?.email,
                transactionId : transactionId,
                price : price,
                className : name,
                classId : id
            }
            await axios.post("http://localhost:5000/payments",paymentInfo)
            .then(res => {
                 console.log(res.data)
                 if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Congratulations!Payment Successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                 }

            })

        }
    }
    return (

        <>
            <form className='w-96 my-10' onSubmit={handleSubmit}>
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
                <button className='btn btn-sm btn-primary mt-6' type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>

            </form>
            {cardError && <p className='text-red-600 m-10'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction Successful with tnrxId:{transactionId}</p>}
        </>

    )

}

export default CheckoutForm
