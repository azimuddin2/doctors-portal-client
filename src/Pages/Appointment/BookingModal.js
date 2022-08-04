import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log('Booking Success', name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-2xl text-center">{name}</h3>
                    <form onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4 justify-items-center my-6'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs text-lg" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" class='btn btn-accent text-white w-full max-w-xs bg-accent' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;