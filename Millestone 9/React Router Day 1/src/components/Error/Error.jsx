import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Opps! I am form Use Router Error</h1>
        </div>
    );
};

export default Error;