import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { user } = useAuth();
    const { _id, name, slots, price } = treatment;
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patientName: user.displayName,
            patientEmail: user.email,
            patientPhone: event.target.phone.value
        };

        fetch('https://doctors-portal-server-ashen-eight.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch()
                // to close the modal
                setTreatment(null);
            })
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-2xl text-center">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4 justify-items-center my-6'
                    >
                        <input
                            type="text"
                            disabled
                            value={format(date, 'PP')}
                            className="input input-bordered w-full max-w-sm text-lg"
                        />
                        <select name='slot' className="select select-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input
                            name='name'
                            type="text"
                            disabled
                            value={user?.displayName || ''}
                            className="input input-bordered w-full max-w-sm"
                        />
                        <input
                            name='email'
                            type="email"
                            disabled
                            value={user?.email || ''}
                            className="input input-bordered w-full max-w-sm"
                        />
                        <input
                            name='phone'
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                            required
                        />
                        <input
                            type="submit"
                            value="SUBMIT"
                            className='btn btn-accent text-white w-full max-w-sm bg-accent'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;