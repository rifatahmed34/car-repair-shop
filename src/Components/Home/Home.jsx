// import { useEffect } from "react";
import Banner from "../Banner/Banner";
import About from "../Page/About";
import { BsCalendar4Event } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';


// import { useState } from "react";
import HomeCard from "../HomeCard/HomeCard";
import UseServices from "./UseServices";

const Home = () => {
    // const [serviceCard, setServiceCard] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServiceCard(data))
    // },[])
    
const serviceCard = UseServices();
    return (
        <div>
            <Banner></Banner>
            <About></About>

            <div className="mt-8">
                <h2 className="text-center text-2xl font-semibold text-red-700">Service</h2>
                <h2 className="text-4xl text-center py-4 font-semibold">Our Service Area</h2>
                <p className="text-center py-4 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <div className="grid lg:grid-cols-3 gap-4 mt-10">
                {
                    serviceCard.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
                }
                </div>
                <div className="w-1/6 mx-auto mt-8 mb-12">
                    <button className="btn text-red-700">More Service</button>
                </div>
                <div className="grid lg:grid-cols-3 justify-around my-16  bg-black text-white lg:h-[30vh] w-full rounded-xl  ">
                    <div className="flex mt-16 gap-3 mx-auto">
                        <div><BsCalendar4Event className=" text-5xl"></BsCalendar4Event></div>
                        <div>
                            <p>We are open monday-friday</p>
                            <p className="text-2xl">7:00 am - 9:00 pm</p>
                        </div>
                    </div>
                    <div className="flex mt-16 gap-3 mx-auto">
                        <div><FiPhoneCall className=" text-5xl"></FiPhoneCall></div>
                        <div>
                            <p>Have a question?</p>
                            <p className="text-2xl">+2546 251 2658</p>
                        </div>
                    </div>
                    <div className="flex mt-16 gap-3 mx-auto">
                        <div><FaLocationDot className=" text-5xl text-red-700"></FaLocationDot></div>
                        <div>
                            <p>Need a repair? our address</p>
                            <p className="text-2xl">Liza Street, New York</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Home;