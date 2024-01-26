import React from 'react';

const Booking = ({ booking, index, setPayment }) => {
    const { patientName, treatment, date, slot, price, paid, transactionId } = booking;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patientName}</td>
            <td>{treatment}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td className='text-secondary font-medium'>${price}</td>
            <td>
                {
                    paid ?
                        <>
                            <h4 className='text-green-500 font-medium'>Paid</h4>
                            <p className='text-sm'>{transactionId}</p>
                        </>
                        :
                        <label
                            onClick={() => setPayment(booking)}
                            htmlFor="payment-modal"
                            className="btn btn-sm rounded capitalize btn-primary text-white font-medium bg-gradient-to-r from-secondary to-primary"
                        >
                            Pay
                        </label>
                }
            </td>
        </tr>
    );
};

export default Booking;