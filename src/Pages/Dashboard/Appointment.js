import React from 'react';

const Appointment = ({ appointment, index }) => {
    const { patientName, patientEmail, treatment, date, slot } = appointment;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{patientEmail}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>{treatment}</td>
        </tr>
    );
};

export default Appointment;