import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import Information from './Information/Information';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;