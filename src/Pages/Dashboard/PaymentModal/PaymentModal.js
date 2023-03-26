import React from 'react';

const PaymentModal = ({ payment, setPayment }) => {
    const { patientName, treatment, date, slot, price } = payment;

    return (
        <div>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h4 style={{ color: '#3CBCA2' }} className='text-lg font-semibold'>Hello, {patientName}</h4>
                    <h3 className="font-bold text-xl mt-2">Please Pay for {treatment}</h3>
                    <p className="py-2 text-base">Your Appointment: <span style={{color: '#F0AA22'}}>{date}</span> at ${slot}</p>
                    <h2 className='text-xl font-bold'>Please Pay: ${price}</h2>
                    <div className="divider"></div>
                    <div className="modal-action">
                        <label htmlFor="payment-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;