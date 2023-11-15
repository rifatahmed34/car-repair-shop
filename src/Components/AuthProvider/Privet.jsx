import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Privet = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location  =  useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname}  to='/login' ></Navigate>
};
Privet.propTypes = {
    children: PropTypes.object
  };

export default Privet;