import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user.email);
                saveUserDataBase(user.displayName, user.email);
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

    return (
        <div>
            <button
                onClick={handleSignInWithGoogle}
                className="btn btn-outline w-full"
            >
                <FcGoogle className='text-3xl'></FcGoogle>
                <span className='ml-1'>CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;