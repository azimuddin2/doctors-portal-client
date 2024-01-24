import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ payment, setPayment, refetch }) => {
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { price, patientName, patientEmail, _id } = payment;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            toast.error(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );

        if (confirmError) {
            toast.error(confirmError.message)
            return;
        }

        if (paymentIntent.status === "succeeded") {
            // store payment info in the database
            const paymentInfo = {
                price,
                transactionId: paymentIntent.id,
                patientEmail,
                paymentId: _id
            };

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success(`Congrats! Your payment completed. Your Transaction: ${paymentIntent.id}`);
                        setPayment(null);
                        refetch();
                    }
                })
        }
        setProcessing(false);
    };

    return (
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
            <button
                className='btn btn-accent w-full text-white text-xl font-medium mt-5'
                type="submit"
                disabled={!stripe || !clientSecret || processing}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;