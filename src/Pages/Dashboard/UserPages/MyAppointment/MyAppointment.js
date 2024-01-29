import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Booking from './Booking';
import appointmentCalendar from '../../../../assets/images/appointment-calendar.gif';
import { Link } from 'react-router-dom';
import PaymentModal from '../PaymentModal/PaymentModal';
import useAuth from '../../../../hooks/useAuth';
import Button from '../../../Shared/Button/Button';
import Loading from '../../../Shared/Loading/Loading';
import useTitle from '../../../../hooks/useTitle';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';

const MyAppointment = () => {
    useTitle('My Appointment');
    const { user, logOut } = useAuth();
    const [payment, setPayment] = useState(null);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading, error, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                if (res.status === 401 || res.status === 403) {
                    logOut();
                    localStorage.removeItem('accessToken');
                }
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

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section>
            {
                bookings?.length > 0 ?
                    <div className='min-h-screen p-5 lg:p-12' style={{ backgroundColor: '#F1F5F9' }}>
                        <h2 className='text-2xl font-medium mb-4'>My Appointment</h2>
                        <div className="overflow-x-auto rounded-lg">
                            <table className="table w-full">
                                <thead className='bg-[#E6E6E6] uppercase text-accent'>
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
                                <tbody className='bg-white'>
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
                    <div className='py-12 text-center'>
                        <img src={appointmentCalendar} alt="Calendar" className='rounded-lg mx-auto' />
                        <Link to="/appointment">
                            <Button>Please Appointment</Button>
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