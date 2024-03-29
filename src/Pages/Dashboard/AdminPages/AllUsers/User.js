import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';

const User = ({ user, index, refetch, setDeletingUser }) => {
    const { _id, name, email } = user;

    const handleMakeAdmin = (id) => {
        fetch(`https://doctors-portal-server-ashen-eight.vercel.app/user/admin/${id}`, {
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
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    user?.role === 'admin' ?
                        (
                            <p className='flex items-center'>
                                <GrUserAdmin className='text-2xl text-accent' />
                                <span className='font-semibold text-accent'>Admin</span>
                            </p>
                        )
                        :
                        (
                            <button
                                onClick={() => handleMakeAdmin(_id)}
                                className="btn btn-sm capitalize btn-accent text-white font-semibold rounded"
                            >
                                MakeAdmin
                            </button>
                        )
                }
            </td>
            <td>
                <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className='btn btn-sm btn-error capitalize text-white font-semibold rounded'
                >
                    <span className='hidden lg:block'>Remove User</span>
                    <FaDeleteLeft className='text-xl ml-1' />
                </label>
            </td>
        </tr>
    );
};

export default User;