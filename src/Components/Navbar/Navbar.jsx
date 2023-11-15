import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.log(err.massage);
            })
    }

    
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Setvice</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {
            user?.email ?
            <li><Link to='/booking'>MY Booking</Link></li>:
            <></>

        }
       


    </>



    return (
        <div className="navbar px-16 py-6 mb-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'><img src={logo1} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end flex gap-3">
                {
                    user ?
                        <div className='flex gap-2'><button onClick={handleLogOut} className='btn'>Sign Out </button> {user?.img}</div>
                        :
                        <Link to='/login'><button>Login</button></Link>
                }
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>

        </div>
        // <div className="navbar px-20 bg-base-100 my-8">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 {links}
        //             </ul>
        //         </div>
        //         <Link to='/'><img className='h-16 w-26' src={logo1} alt="" /></Link>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1 text-white">
        //             {links}
        //         </ul>
        //     </div>
        //     <div className="navbar-end flex gap-3">


        //         <button className="btn btn-outline btn-warning">Appointment</button>
        //     </div>
        // </div>
    );
};

export default Navbar;