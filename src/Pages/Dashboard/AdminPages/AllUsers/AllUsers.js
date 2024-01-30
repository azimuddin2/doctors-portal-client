import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import useTitle from '../../../../hooks/useTitle';
import User from './User';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';

const AllUsers = () => {
    useTitle('All Users');
    const [deletingUser, setDeletingUser] = useState(null);

    const { data: users = [], isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ashen-eight.vercel.app/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
                    toast.success(`User ${user.email} Deleted Successfully`);
                }
            })
    };

    const closeModal = () => {
        setDeletingUser(null);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='min-h-screen p-5 lg:p-12' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className='text-2xl font-medium mb-4'>All Users</h2>
            <div className="overflow-x-auto rounded-lg">
                <table className="table w-full">
                    <thead className='bg-[#E6E6E6] uppercase text-accent'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
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