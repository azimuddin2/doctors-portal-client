import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

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
                    className='btn btn-sm btn-error capitalize text-white font-semibold rounded'
                >
                    <span className='hidden lg:block'>Delete</span>
                    <FaDeleteLeft className='text-xl ml-1' />
                </label>
            </td>
        </tr>
    );
};

export default DoctorRow;