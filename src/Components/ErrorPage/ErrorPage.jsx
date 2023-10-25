import { Link } from 'react-router-dom';
import image from '../../assets/checkout//Six-404-Error-Page-Templates-With-Illustrations.jpg'
const ErrorPage = () => {
    return (
        <div className="w-full h-[80vh]">
            <Link><img className='w-full' src={image} alt="" /></Link>
        </div>
    );
};

export default ErrorPage;