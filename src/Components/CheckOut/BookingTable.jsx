
import PropTypes from 'prop-types';
import logo  from '../../assets/checkout/images.png'





const BookingTable = ({ table, handleDelete, handleUpdate  }) => {
    console.log(table);
    const { name, title, price, email, phone, img, date, _id, status } = table;

    

    return (
        <tr>
            <th>
                <button className="btn btn-circle btn-outline">
                    <svg onClick={() => handleDelete(_id)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-32 h-24 rounded-none">
                            
                            {
                                <img src={logo} alt="Avatar Tailwind CSS Component" /> && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">{title}</div>
                        <div className="text-sm opacity-50">{date}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
            {
                status === "confirm" ? 
                <button className='btn btn-outline btn-warning '>Confirmed</button> :
                <button onClick={() => handleUpdate(_id)} className="btn btn-outline btn-warning">Pending</button>

               
            }
            </th>
        </tr>

    );
};
BookingTable.propTypes = {
    table: PropTypes.bool,
    handleDelete: PropTypes.object,
    handleUpdate: PropTypes.object
};
export default BookingTable;