import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, email, image, specialty } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                >
                    <RiDeleteBin5Line className='text-2xl text-red-500 cursor-pointer'></RiDeleteBin5Line>
                </label>
            </td>
        </tr>
    );
};

export default DoctorRow;