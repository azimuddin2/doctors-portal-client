import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';

const ManageDoctors = () => {
    useTitle('Manage Doctors');
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, error, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-ashen-eight.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteDoctor = (doctor) => {
        fetch(`https://doctors-portal-server-ashen-eight.vercel.app/doctor/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    };

    const closeModal = () => {
        setDeletingDoctor(null);
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='min-h-screen p-5 lg:p-12' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className='text-2xl font-medium mb-4'>Manage Doctors</h2>
            <div className="overflow-x-auto rounded-lg">
                <table className="table w-full">
                    <thead className='bg-[#E6E6E6] uppercase text-accent'>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    modalData={deletingDoctor}
                    successModal={handleDeleteDoctor}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;