
const HomeCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card  bg-slate-100 rounded-none shadow-xl">
            <figure><img className="h-52 w-full p-2 " src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl font-semibold text-[#FF3811]">Price: {price}</p>
               
            </div>
        </div>
    );
};

export default HomeCard;