import { useLoaderData } from "react-router-dom";
import image from '../../assets/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, img, price } = service;
    const {user} = useContext(AuthContext)

    const handleCheckOut = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const date = from.date.value;
        const phone = from.phone.value;
        const  email = user?.email;
        const massage = from.massage.value;
        const order = {
            name, date, phone, email, massage, _id, img, title, price
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }


    return (

        <div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image} className="w-full rounded-xl" />
                <div className="absolute bg-gradient-to-r rounded-xl space-y-7 flex items-center  h-full w-full ">
                    <div className='w-1/3 space-y-7 ml-16'>
                        <h className="text-6xl font-semibold ">Check Out</h>
                    </div>
                </div>
            </div>
            <div className="mt-16">
            <h2 className="text-6xl text-center font-semibold my-10">{title}</h2>
                <form onSubmit={handleCheckOut} className="card-body">
                    <div className="form-control">
                        <div className="lg:flex gap-4">
                            <div className="w-full">
                                <input type="text" placeholder="Name" name='name' className="input border-none bg-slate-100 w-full rounded-none input-bordered" />
                            </div>
                            <div className="w-full">
                                <input type="date" placeholder="Date" name='date' className="input text-black border-none bg-slate-200 w-full rounded-none input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="lg:flex gap-4 mt-4">
                            <div className="w-full">
                                <input type="number" placeholder="Your Phone" name='phone' className="input text-black border-none bg-slate-100 w-full rounded-none input-bordered" />
                            </div>
                            <div className="w-full">
                                <label htmlFor=""></label>
                                <input type="email" placeholder="Your Email" name='email' className="input  border-none bg-slate-100 w-full rounded-none input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-4 ">
                        <input type="text" placeholder="Your Massage" name='massage' className="input text-black h-40 border-none bg-slate-100 w-full rounded-none input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white font-semibold hover:bg-amber-950 bg-[#FF3811]">Order Confirm</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default CheckOut;