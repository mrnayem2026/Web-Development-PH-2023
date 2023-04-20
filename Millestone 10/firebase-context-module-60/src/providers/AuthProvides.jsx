import React, { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvides = ({ children }) => {
    const [error,setError] = useState('');

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        createUser,
        error,
        setError
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvides;