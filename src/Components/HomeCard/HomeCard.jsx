import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const HomeCard = ({ service }) => {
    const { title, price, img, _id } = service;
    return (
        <div className="card  bg-slate-100 rounded-none shadow-xl">
            <figure><img className="h-52 w-full p-2 " src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                <p className="text-xl font-semibold text-[#FF3811]">Price: {price}</p>
                <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className='text-3xl'></AiOutlineArrowRight></Link>
                </div>
               
            </div>
        </div>
    );
};

export default HomeCard;