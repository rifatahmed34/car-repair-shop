import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";


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
       const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            setLoding(false);
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

export default AuthProvider;