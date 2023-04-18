import React from 'react';
import { createContext } from 'react';

const AuthContext = createContext(null);


const AuthProvides = ({children}) => {



    const  authInfo = {

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