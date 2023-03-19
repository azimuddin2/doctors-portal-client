import React from 'react';
import footer from '../../assets/images/footer.png';
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
            <footer className="footer px-8 lg:px-20 py-20 text-base-content">
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
                    <div className='flex items-center gap-1 text-accent'>
                        <FaFacebook className='text-3xl cursor-pointer'></FaFacebook>
                        <FaLinkedin className='text-3xl cursor-pointer'></FaLinkedin>
                        <FaWhatsapp className='text-3xl cursor-pointer'></FaWhatsapp>
                        <FaInstagram className='text-3xl cursor-pointer'></FaInstagram>
                    </div>
                </div>
            </footer>
            <div className="text-center py-8">
                <p><span>Copyright © 2023 All Rights Reserved</span></p>
            </div>
            <ScrollToTop
                smooth
                className=" animate-bounce"
                color="#fff"
                width="20"
                height="20"
                top="400"
                style={{ background: "linear-gradient(#19D3AE, #0FCFEC)", padding: "10px", boxShadow: 'none', borderRadius: "50px" }}
            />
        </div>
    );
};

export default Footer;