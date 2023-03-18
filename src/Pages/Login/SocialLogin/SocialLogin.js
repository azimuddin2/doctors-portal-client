import React from 'react';
import google from '../../../assets/social/google.png';

const SocialLogin = () => {

    return (
        <div>
            <button
                className="btn btn-outline w-80">
                <img src={google} alt="" />
                <span>CONTINUE WITH GOOGLE</span>
            </button>
        </div>
    );
};

export default SocialLogin;