import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from './Service';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const url = `http://localhost:5000/available?date=${formattedDate}`;

    const { data: services, isLoading, error, refetch } = useQuery({
        queryKey: ['available', formattedDate],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='mt-12 px-5 lg:px-8'>
            <h4 className='text-center text-secondary text-xl w-64 mx-auto lg:w-full'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='my-8 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;