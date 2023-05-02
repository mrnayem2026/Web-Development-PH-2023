import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvides = ({ children }) => {
    const [user,setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // User ace kina ta check 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,createUser =>{
            console.log('from auth state change ' , createUser);
            setUser(createUser);
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn
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