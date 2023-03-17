import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Information from './Information/Information';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;