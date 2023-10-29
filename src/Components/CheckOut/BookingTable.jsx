// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import logo1 from '../../assets/checkout/images.png'

import PropTypes from 'prop-types';


const BookingTable = ({ table, handleDelete }) => {
    const [bookings, setBookings] = table;
    // const { user } = useContext(AuthContext)
    const { title, img, price, email, _id } = table;

    const handleUpdate = id => {
        fetch(`http://localhost:5000/boookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ satus: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.satus = 'confirme';
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div className="mt-36">
            <div className="grid grid-cols-8  gap-6 space-y-5 w-full">
                <div className="flex  justify-center mt-10">
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="flex col-span-2 gap-6 justify-start h-24 start-0">
                    {email ?
                        <img className="h-24 w-32 " src={img} alt="" /> :
                        <img className="h-24 w-32 " src={logo1} alt="" />

                    }

                    <div>
                        <p className="mt-9 col-span-2 text-1xl font-semibold">{title}</p>
                    </div>
                </div>

                <div><p className="mt-9 col-span-2 text-1xl font-semibold">Price ${price}</p></div>
                <div>
                    <h4 className="mt-9 col-span-3 text-1xl font-semibold">{email}</h4>
                </div>
                <div className='col-span-2 ml-8 mt-8'>
                    {
                        status === 'confirm' ?
                            <span>Confirm</span> :
                            <button onClick={() => handleUpdate()} className='btn mt-8'>Please Confirm</button>
                    }
                </div>
            </div>
        </div>
    );
};
BookingTable.propTypes = {
    table: PropTypes.bool,
    handleDelete: PropTypes.object
};

export default BookingTable;