import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
import axios from "axios";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, Provider)
    }

    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }


    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const logedUser = {email: userEmail}
            setUser(currentUser)
            setLoding(false);
            console.log('current user',currentUser);
            // if user exists then issue a token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',logedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', logedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe();
        }
    })
    

    const info = {
        user,
        loading,
        createUser,
        googleLogin,
        signIn,
        logOut
    }
    return (    
        <AuthContext.Provider value={info}>
            {children}
       </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
  };
export default AuthProvider;   