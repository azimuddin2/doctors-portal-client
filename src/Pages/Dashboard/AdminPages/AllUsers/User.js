import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { GrUserAdmin } from 'react-icons/gr';
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';

const User = ({ user, index, refetch, setDeletingUser }) => {
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
                        <p className='flex items-center'>
                            <GrUserAdmin className='text-2xl'></GrUserAdmin>
                            <span className='font-semibold'>Admin</span>
                        </p>
                        :
                        <button
                            onClick={() => handleMakeAdmin(_id)}
                            className="btn btn-sm capitalize btn-accent text-white font-semibold rounded"
                        >
                            Make Admin
                        </button>
                }
            </td>
            <td>
                <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className='btn btn-sm capitalize border-none bg-red-500 text-white font-semibold rounded'
                >
                    <span className='hidden lg:block'>Remove User</span>
                    <FaDeleteLeft className='text-xl ml-1' />
                </label>
            </td>
        </tr>
    );
};

export default User;