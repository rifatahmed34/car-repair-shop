import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from '../../assets/checkout/checkout.png'
import BookingTable from "./BookingTable";
import Swal from 'sweetalert2'


const Book = () => {
    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/boookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])
    
    const handleDelete = (id) => {
        const url = `http://localhost:5000/boookings/${id}`
        fetch(url , {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    })
                    const remaining = booking.filter(bookings => bookings._id !== id)
                    setBooking(remaining)
                    .then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
            }
        })
       
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).
    }

    return (
        <div className="">
            <h2>Booking: {booking.length}</h2>
            <img src={logo} alt="" />
            {booking.map(table => <BookingTable 
            key={table.id}
            table={table}
            handleDelete={handleDelete}></BookingTable>)}
        </div>
        
    );
};

export default Book;