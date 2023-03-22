import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading';
import User from './User';

const AllUsers = () => {
    const { data: users, isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    console.log(users)

    if (isPending) {
        return <Loading></Loading>
    }

    return (
        <div className=' h-full p-10' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className=' text-2xl font-medium mb-5'>All Users</h2>
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
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;