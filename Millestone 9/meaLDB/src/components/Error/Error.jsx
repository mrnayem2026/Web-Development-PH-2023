import React from 'react';
import {Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(error.data);
    return (
        <div className='text-center'>     
            <h1 className='text-9xl text-red-400 '>Error</h1>
            <p className='text-2xl p-3'>{error.data || "Not found"}</p>
            <p className='text-2xl p-3'>{error.status || "404"}</p>
            <p className='text-2xl p-3'>{error.statusText || "Not Found"}</p>
            <Link to="/">
                <button className='btn btn-primary'>Go to Home page</button>
            </Link>
        </div>
    );
};

export default Error;