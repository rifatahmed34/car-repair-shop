import banner2 from '../../assets/banner/2.jpg'
import banner3 from '../../assets/banner/3.jpg'
import banner4 from '../../assets/banner/4.jpg'
import banner5 from '../../assets/banner/5.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[100vh]">.
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner5} className="w-full rounded-xl h-[100vh]" />
                <div className="absolute bg-gradient-to-r rounded-xl space-y-7 flex items-center mt- from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full ">
                   <div className='w-1/3 space-y-7 ml-16'>
                   <h className="text-6xl font-semibold text-lime-400">Affordable Price For Car Servicing</h>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='gap-4'>
                        <button className="btn btn-outline btn-success mr-4">Discover More</button>
                        <button className="btn btn-outline hover:bg-white btn-warning">Latest Project</button>
                    </div>
                   </div>
                    
                </div>
                <div className="absolute flex justify-end left-5 gap-6 right-8 mb-8 bottom-0 ">
                    <a href="#slide4" className="btn btn-outline  bg-gray-500">❮</a>
                    <a href="#slide2" className="btn btn-outline  bg-gray-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute bg-gradient-to-r rounded-xl space-y-7 flex items-center mt- from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full ">
                   <div className='w-1/3 space-y-7 ml-16'>
                   <h className="text-6xl text-zinc-400 font-semibold">Affordable Price For Car Servicing</h>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='gap-4'>
                        <button className="btn btn-outline btn-success mr-4">Discover More</button>
                        <button className="btn btn-outline hover:bg-white btn-warning">Latest Project</button>
                    </div>
                   </div>
                    
                </div>
                <div className="absolute flex justify-end left-5 gap-6 right-8 mb-8 bottom-0 ">
                    <a href="#slide1" className="btn btn-outline  bg-gray-500">❮</a>
                    <a href="#slide3" className="btn btn-outline  bg-gray-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute bg-gradient-to-r rounded-xl space-y-7 flex items-center mt- from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full ">
                   <div className='w-1/3 space-y-7 ml-16'>
                   <h className="text-6xl text-orange-500 font-serif ">Affordable Price For Car Servicing</h>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='gap-4'>
                        <button className="btn btn-outline btn-success mr-4">Discover More</button>
                        <button className="btn btn-outline hover:bg-white btn-warning">Latest Project</button>
                    </div>
                   </div>
                    
                </div>
                <div className="absolute flex justify-end left-5 gap-6 right-8 mb-8 bottom-0 ">
                    <a href="#slide2" className="btn btn-outline  bg-gray-500">❮</a>
                    <a href="#slide4" className="btn btn-outline  bg-gray-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute bg-gradient-to-r space-y-7 rounded-xl flex items-center mt- from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full ">
                   <div className='w-1/3 space-y-7 ml-16'>
                   <h className="text-6xl text-green-500 font-semibold ">Affordable Price For Car Servicing</h>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='gap-4'>
                        <button className="btn btn-outline btn-success mr-4">Discover More</button>
                        <button className="btn btn-outline hover:bg-white btn-warning">Latest Project</button>
                    </div>
                   </div>
                    
                </div>
                <div className="absolute flex justify-end left-5 gap-6 right-8 mb-8 bottom-0 ">
                    <a href="#slide3" className="btn btn-outline  bg-gray-500">❮</a>
                    <a href="#slide1" className="btn btn-outline  bg-gray-500">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;