import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../assets/social/google.png';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-500 text-center'><small>{error?.message}</small></p>
    }

    if (loading) {
        return (
            <div class="flex items-center justify-center ">
                <div class="w-14 h-14 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        )
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-80">
                <img src={google} alt="" />
                <span>CONTINUE WITH GOOGLE</span>
            </button>
            {errorMessage}
        </div>
    );
};

export default SocialLogin;