import about1 from '../../assets/about_us/person.jpg'
import about2 from '../../assets/about_us/parts.jpg'





const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={about1} className=" w-3/4 pr-10 rounded-lg shadow-2xl" />
                <img src={about2} className=" w-2/4 absolute top-32  border-8 border-white  left-64 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-2xl font-semibold text-[#FF3811] mb-4'>About Us</h2>
                    <h2 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h2>
                    <p className="py-6 w-3/4 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='py-6 w-3/4 text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-red-700 text-white mt-5">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;