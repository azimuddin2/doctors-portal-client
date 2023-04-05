import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
import { BiImageAdd } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddDoctor = () => {
    useTitle('Add Doctors');
    const [accepted, setAccepted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgBB_key;

    const { data: appointments, isLoading } = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointments');
            const data = await res.json();
            return data;
        }
    })

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url,
                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Doctor is added successfully.');
                                reset();
                                navigate('/dashboard/manage-doctors');
                            }
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-full p-3 lg:p-16' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className=' text-2xl font-medium mb-5 text-center md:text-left'>Add a New Doctor</h2>
            <div className='bg-white w-full py-10 px-4 lg:px-10 rounded-xl shadow-md'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-3 lg:gap-4"
                >

                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                },
                            })}
                            type="text"
                            className="input input-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required',
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email',
                                }
                            })}
                            type="email"
                            className="input input-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-sm">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register("specialty")}
                            className="select select-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary">
                            {
                                appointments.map((appointment) => <option
                                    key={appointment._id}
                                    value={appointment.name}
                                >{appointment?.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-sm mt-4 lg:mt-0">
                        <label htmlFor='image' className="input input-bordered w-full h-24 max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer text-center pt-4">
                            <span className="label-text text-accent font-medium">Upload Photo</span>
                            <div className=' flex justify-center items-center'>
                                <BiImageAdd className='text-4xl text-accent'></BiImageAdd>
                            </div>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Photo is required',
                                },
                            })}
                            id="image"
                            type="file"
                            className="hidden"
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label flex justify-start items-center">
                            <input
                                onClick={() => setAccepted(!accepted)}
                                type="checkbox"
                                className="checkbox checkbox-accent" />
                            <span className="label-text ml-3 text-accent font-semibold text-lg">Remember me</span>
                        </label>
                    </div>

                    <input
                        disabled={!accepted}
                        className="btn btn-accent text-white w-full max-w-sm"
                        type="submit"
                        value='Save'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;