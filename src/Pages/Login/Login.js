import React, { useState } from 'react';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-500 text-center'><small>{error?.message}</small></p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="flex justify-center items-center my-12">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email',
                                    }
                                })}
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer',
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <p className='m-12'
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', top: '10', right: '0', cursor: 'pointer' }}
                            >
                                {
                                    showPassword ?
                                        <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                                        :
                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                }
                            </p>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className="btn btn-accent text-white w-full max-w-xs mt-2" type="submit" value='Login' />
                    </form>
                    <p className='text-center'><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></small></p>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;