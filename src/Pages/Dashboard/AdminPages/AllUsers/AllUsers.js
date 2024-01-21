import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal';
import Loading from '../../Shared/Loading';
import User from './User';
import useTitle from '../../../hooks/useTitle';

const AllUsers = () => {
    useTitle('All Users');
    const [deletingUser, setDeletingUser] = useState(null);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ashen-eight.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteUser = (user) => {
        fetch(`https://doctors-portal-server-ashen-eight.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${user.email} deleted successfully`)
                }
            })
    };

    const closeModal = () => {
        setDeletingUser(null);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-full p-4 lg:p-10' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className='text-2xl font-medium mb-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <User
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                                setDeletingUser={setDeletingUser}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    modalData={deletingUser}
                    successModal={handleDeleteUser}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;