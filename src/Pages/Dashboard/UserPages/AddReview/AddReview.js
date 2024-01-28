import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';
import useAuth from '../../../../hooks/useAuth';
import { CiEdit } from 'react-icons/ci';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleOnSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='min-h-screen py-8 p-5 lg:p-16' style={{ backgroundColor: '#F1F5F9' }}>
            <div className='lg:w-1/2 w-full'>
                <div className='flex items-center justify-center mb-4'>
                    <h2 className='text-2xl font-semibold text-accent'>Add a Review</h2>
                    <CiEdit className='text-3xl text-accent'></CiEdit>
                </div>
                <form
                    onSubmit={handleSubmit(handleOnSubmit)}
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
                                    message: 'Name is required',
                                },
                            })}
                            type="text"
                            defaultValue={user?.displayName}
                            placeholder='Type here name'
                            className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Select Your Country</span>
                        </label>
                        <select
                            {...register("country")}
                            className="select select-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary">
                            {
                                countries.map((country) => <option
                                    key={country.cca3}
                                    value={country.name.common}
                                >
                                    {country.name.common}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className='form-control'>
                        <textarea
                            {...register('description', {
                                required: {
                                    value: true,
                                    message: 'Review message is required'
                                }
                            })}
                            cols='30'
                            rows='4'
                            placeholder='Type here review message...'
                            className=' textarea textarea-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary '
                        ></textarea>
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-xl' />{errors.description.message}</span>}
                        </label>
                    </div>
                    <input
                        className="btn btn-accent text-white w-full mt-2"
                        type="submit"
                        value='Send'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;