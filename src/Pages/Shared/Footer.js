import React from 'react';
import footer from '../../assets/images/footer.png';
import { Link } from 'react-router-dom';

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
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </footer>
            <div className="text-center py-8">
                <p><span>Copyright © 2023 All Rights Reserved</span></p>
            </div>
        </div>
    );
};

export default Footer;