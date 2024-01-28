import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SlCloudUpload } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../Shared/Loading/Loading';
import { MdErrorOutline } from 'react-icons/md';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import { CiEdit } from 'react-icons/ci';

const AddDoctor = () => {
    useTitle('Add Doctor');
    const [accepted, setAccepted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_ImgBB_Key;

    const { data: appointments, isLoading, error } = useQuery({
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
                    };

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

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <div className='min-h-screen py-8 p-5 lg:p-16' style={{ backgroundColor: '#F1F5F9' }}>
            <div className='lg:w-1/2 w-full'>
                <div className='flex items-center justify-center mb-4'>
                    <h2 className='text-2xl font-semibold text-accent'>Add a New Doctor</h2>
                    <CiEdit className='text-3xl text-accent'></CiEdit>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 bg-white py-8 px-5 lg:p-10 rounded-xl shadow"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Doctor name is required',
                                },
                            })}
                            type="text"
                            placeholder='Type here doctor name'
                            className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Doctor email is required',
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email',
                                }
                            })}
                            type="email"
                            placeholder='Type here doctor email'
                            className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register("specialty")}
                            className="select select-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary">
                            {
                                appointments?.map((appointment) => <option
                                    key={appointment._id}
                                    value={appointment.name}
                                >
                                    {appointment?.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor='image' className="input border-dashed input-bordered w-full h-28 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary cursor-pointer text-center pt-5">
                            <span className="label-text text-accent font-medium">Upload Photo</span>
                            <div className='flex justify-center items-center'>
                                <SlCloudUpload className='text-4xl text-accent' />
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
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label flex justify-start items-center">
                            <input
                                onClick={() => setAccepted(!accepted)}
                                type="checkbox"
                                className="checkbox checkbox-accent" />
                            <span className="label-text ml-3 text-accent font-semibold text-lg">Remember Me</span>
                        </label>
                    </div>
                    <input
                        disabled={!accepted}
                        className="btn btn-accent text-white w-full"
                        type="submit"
                        value='Save'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;