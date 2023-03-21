import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from './Service';
import Loading from '../../Shared/Loading';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const url = `http://localhost:5000/available?date=${formattedDate}`;

    const { data: services, isPending, refetch } = useQuery({
        queryKey: ['available', formattedDate],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    });

    if (isPending) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>
            <h4 className='text-center text-secondary text-xl w-64 mx-auto lg:w-full'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='px-8 my-8 lg:my-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
        </div>
    );
};

export default AvailableAppointments;