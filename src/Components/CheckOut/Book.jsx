import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../assets/checkout/checkout.png'
import BookingTable from "./BookingTable";
import Swal from 'sweetalert2'
import axios from "axios";
import useAxios from "../../Hooks/useAxios";


const Book = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const axiosSecure = useAxios();

    const url = `/bookings?email=${user?.email}`
    // const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user?.email}`, Credential: 'invalid')
        //     .then(res => res.json())
        //     .then(data => setBooking(data))
            axiosSecure.get(url) // send cookie to backend
            .then(res => {
                setBooking(res.data);
            })
    }, [url, axiosSecure])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                const remaining = booking.filter(item => item._id !== id);
                                setBooking(remaining) 
                            }
                        })
                        
                }
            })

    }


    const handleUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = booking.filter(bookings => bookings._id !== id);
                    const update = booking.find(bookings => bookings._id === id);
                    update.status = 'confirme';
                    const newBookings = [update, ...remaining];
                    setBooking(newBookings)
                }
            })
    }

    return (
        <div className="">
            <div id="slide1" className="carousel-item relative w-full mb-16">
                <img src={logo} className="w-full rounded-xl" />
                <div className="absolute bg-gradient-to-r rounded-xl space-y-7 flex items-center mt- from-[#151515] to-[rgba(21, 21, 21, 0.00)]  h-full w-full ">
                    <div className='w-1/3 space-y-7 ml-16'>
                        <h className="text-6xl font-semibold text-white ">Cart Details</h>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="text-2xl font-semibold text-black">
                        <tr>

                            <th></th>
                            <th>Service Name</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Price</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(table => <BookingTable
                                key={table._id}
                                table={table}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></BookingTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Book;