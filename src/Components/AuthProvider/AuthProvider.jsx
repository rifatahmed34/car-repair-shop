import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, Provider)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const info = {
        user,
        createUser,
        googleLogin,
        signIn
    }
    return (    
        <AuthContext.Provider value={info}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;