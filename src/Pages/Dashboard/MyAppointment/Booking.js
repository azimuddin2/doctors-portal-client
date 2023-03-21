import React from 'react';

const Booking = ({ booking, index }) => {
    const { patientName, treatment, date, slot } = booking;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatment}</td>
            <td>{date}</td>
            <td>{slot}</td>
        </tr>
    );
};

export default Booking;