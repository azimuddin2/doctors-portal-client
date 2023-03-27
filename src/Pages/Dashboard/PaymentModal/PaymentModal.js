import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentModal = ({ payment, setPayment, refetch }) => {
    const { patientName, treatment, date, slot, price } = payment;

    return (
        <div>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h4 style={{ color: '#3CBCA2' }} className='text-lg font-semibold'>Hello, {patientName}</h4>
                    <h3 className="font-bold text-xl mt-2">Please Pay for {treatment}</h3>
                    <p className="py-2 text-base">Your Appointment: <span style={{ color: '#F0AA22' }}>{date}</span> at ${slot}</p>
                    <h2 className='text-xl font-bold'>Please Pay: ${price}</h2>
                    <div className="divider"></div>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                refetch={refetch}
                                payment={payment}
                                setPayment={setPayment}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;