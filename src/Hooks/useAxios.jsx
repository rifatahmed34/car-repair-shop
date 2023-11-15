import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})


const useAxios = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()
 useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
        return res;
    }, error => {
        console.log('error in interceptors',error.response);
        if(error.response.status === 401 || error.response.status === 403){
            console.log('LogOur the user');
            logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                console.log(err.massage);
            })
        }
    })
 }, [logOut, navigate])

   return axiosSecure;
};

export default useAxios;