import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrUserAdmin } from 'react-icons/gr';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { _id, name, email } = user;

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/user/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Make admin successful ${email}`)
                    refetch();
                }
            })
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    user?.role ?
                        <GrUserAdmin className='text-2xl'></GrUserAdmin>
                        :
                        <button
                            onClick={() => handleMakeAdmin(_id)}
                            className="btn btn-sm capitalize btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
                        >
                            Make Admin
                        </button>
                }
            </td>
            <td>
                <RiDeleteBin5Line className='text-2xl text-red-500 cursor-pointer'></RiDeleteBin5Line>
            </td>
        </tr>
    );
};

export default User;