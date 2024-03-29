import React from 'react';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundPosition: '100%',
            width: '100%',
            backgroundSize: 'cover'
        }}>
            <footer className="footer px-5 lg:px-8 py-20 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/appointment' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/appointment' className="link link-hover">Cavity Filling</Link>
                    <Link to='/appointment' className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                    <div className='flex items-center gap-2 text-accent mt-2'>
                        <FaFacebook className='text-2xl cursor-pointer'></FaFacebook>
                        <FaLinkedin className='text-2xl cursor-pointer'></FaLinkedin>
                        <FaWhatsapp className='text-2xl cursor-pointer'></FaWhatsapp>
                        <FaInstagram className='text-2xl cursor-pointer'></FaInstagram>
                    </div>
                </div>
            </footer>
            <div className="text-center py-8">
                <p><span>Copyright © 2024 Doctors Portal</span></p>
            </div>
            <ScrollToTop
                smooth
                className="animate-bounce flex justify-center items-center"
                color="#fff"
                width="18"
                height="18"
                top="400"
                style={{ background: "linear-gradient(#19D3AE, #0FCFEC)", boxShadow: 'none', borderRadius: "50px"}}
            />
        </div>
    );
};

export default Footer;