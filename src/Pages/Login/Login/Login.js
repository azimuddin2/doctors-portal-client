import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';
import { Fade } from 'react-reveal';
import useTitle from '../../../hooks/useTitle';
import useAuth from '../../../hooks/useAuth';
import { MdErrorOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const Login = () => {
    useTitle('Login');
    const { signIn } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [adminAccess, setAdminAccess] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserDataBase(user.displayName, user.email);
                setLoginUserEmail(user?.email);
                reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const saveUserDataBase = (name, email) => {
        const userInfo = {
            name,
            email
        };
        fetch('https://doctors-portal-server-ashen-eight.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    if (token) {
        navigate(from, { replace: true });
    }

    if (adminAccess === true) {
        Swal.fire({
            icon: "info",
            title: "Admin Access🔐",
            html: `
            <div>
                <p class="block text-left ml-2 text-lg font-medium text-slate-700">Email</p>
                <input value="adminaccess@gmail.com" id="email" readOnly class="input input-bordered w-full focus:outline-none text-lg"/>
           </div>
            <div class="mt-3">
                <p class="block text-left ml-2 text-lg font-medium text-slate-700">Password</p>
                <input value="123456@" id="password" readOnly class="input input-bordered w-full focus:outline-none text-lg"/>
           </div>
        `,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'Close',
            cancelButtonColor: '#07332F',
        });
        setAdminAccess(false);
    }

    return (
        <div className="flex justify-center items-center my-12 px-5">
            <Fade bottom>
                <div className="card w-full lg:w-2/6 shadow-lg">
                    <div className="card-body px-6 lg:px-8">
                        <h2 className="text-center text-2xl">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
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
                                            message: 'Provide a valid email',
                                        }
                                    })}
                                    type="email"
                                    className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-lg' />{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-lg' />{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
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
                                    type={showPassword ? "text" : "password"}
                                    className="input input-bordered w-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                                <p className='m-12'
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
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-lg' />{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 flex items-center text-sm"><MdErrorOutline className='text-lg' />{errors.password.message}</span>}
                                </label>
                            </div>
                            <input className="btn btn-accent text-white w-full mt-2" type="submit" value='Login' />
                        </form>
                        <p className='text-center lg:text-lg'><small>New to Doctors Portal? <Link className='text-secondary link' to='/signup'>Create new account</Link></small></p>
                        <div className="divider">Or</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Login;