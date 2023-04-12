import React from 'react';
import { useRouteError,Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>404 || Nothing here to see</h1>
            <Link to="/"> <button>Go Home page</button></Link>
        </div>
    );
};

export default Error;