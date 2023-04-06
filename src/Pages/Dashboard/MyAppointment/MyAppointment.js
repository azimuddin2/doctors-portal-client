import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading';
import Booking from './Booking';
import appointmentCalendar from '../../../assets/images/appointment-calendar.gif';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button';
import PaymentModal from '../PaymentModal/PaymentModal';
import useTitle from '../../../hooks/useTitle';

const MyAppointment = () => {
    useTitle('My Appointment');
    const { user } = useContext(AuthContext);
    const [payment, setPayment] = useState(null);

    const url = `https://doctors-portal-server-ashen-eight.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            {
                bookings?.length > 0 ?
                    <div className='h-full p-4 lg:p-10' style={{ backgroundColor: '#F1F5F9' }}>
                        <h2 className='text-2xl font-medium mb-5'>My Appointment</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Treatment</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings?.map((booking, index) => <Booking
                                            key={booking._id}
                                            index={index}
                                            booking={booking}
                                            setPayment={setPayment}
                                        ></Booking>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='lg:py-16 text-center'>
                        <img src={appointmentCalendar} alt="" className='w-full lg:w-1/2 rounded-lg mx-auto' />
                        <Link to="/appointment">
                            <Button>Appointment</Button>
                        </Link>
                    </div>
            }
            {
                payment && <PaymentModal
                    payment={payment}
                    setPayment={setPayment}
                    refetch={refetch}
                ></PaymentModal>
            }
        </section>
    );
};

export default MyAppointment;