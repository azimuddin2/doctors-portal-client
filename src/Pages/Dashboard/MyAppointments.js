import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Appointment from './Appointment';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])

    return (
        <div>
            <h1 className='text-xl'>My Appointments: {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <Appointment
                                key={appointment._id}
                                index={index}
                                appointment={appointment}
                            ></Appointment>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;