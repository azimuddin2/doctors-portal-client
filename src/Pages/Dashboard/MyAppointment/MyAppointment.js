import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading';
import Booking from './Booking';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings, isPending } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    if (isPending) {
        return <Loading></Loading>
    }

    return (
        <div className=' h-full p-10' style={{backgroundColor: '#F1F5F9'}}>
            <h2 className=' text-2xl font-medium mb-5'>My Appointment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) => <Booking
                                key={booking._id}
                                index={index}
                                booking={booking}
                            ></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;