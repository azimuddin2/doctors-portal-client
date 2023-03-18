import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import google from '../../../assets/social/google.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <div>
            <button
                onClick={handleSignInWithGoogle}
                className="btn btn-outline w-80">
                <img src={google} alt="" />
                <span>CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;