import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';
import { Fade } from 'react-reveal';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    useTitle('Signup');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                handleUpdateUserProfile(data.name);
                reset();
                saveUserDataBase(data.name, data.email);
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const handleUpdateUserProfile = (name) => {
        const userInfo = {
            displayName: name
        };

        updateUserProfile(userInfo)
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const saveUserDataBase = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    };

    return (
        <div>
            <div className="flex justify-center items-center my-12 px-3">
                <Fade bottom>
                    <div className="card w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center text-2xl">Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
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
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required',
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer',
                                            }
                                        })}
                                        type={showPassword ? 'text' : 'password'}
                                        className="input input-bordered w-full max-w-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    />
                                    <p
                                        className='m-12'
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ position: 'absolute', top: '10', right: '0', cursor: 'pointer' }}
                                    >
                                        {
                                            showPassword ?
                                                <FontAwesomeIcon className='text-gray-400' icon={faEyeSlash}></FontAwesomeIcon>
                                                :
                                                <FontAwesomeIcon className='text-gray-400' icon={faEye}></FontAwesomeIcon>
                                        }
                                    </p>
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <input className="btn btn-accent text-white w-full max-w-xs mt-2" type="submit" value='Signup' />
                            </form>
                            <p className='text-center'><small>Already have an Account? <Link to='/login' className='text-secondary'>Please Login</Link></small></p>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default SignUp;