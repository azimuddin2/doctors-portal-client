import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                            toast.success(`${result.name} is added successfully`)
                            reset();
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-full p-10' style={{ backgroundColor: '#F1F5F9' }}>
            <h2 className=' text-2xl font-medium mb-5'>Add a New Doctor</h2>
            <div className='bg-white w-96 py-8 px-10'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
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
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
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
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
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

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Photo is required',
                                },
                            })}
                            type="file"
                            className="input input-bordered w-full max-w-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className="btn btn-accent text-white w-full max-w-xs mt-2" type="submit" value='Save' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;