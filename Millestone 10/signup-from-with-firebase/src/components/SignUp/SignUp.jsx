import React from 'react';
import singUpPic from '../../assets/icon/signupPic.png'

const SignUp = () => {
    return (
        <div className='container mx-auto lg:py-36 rounded-3xl '>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img src={singUpPic} className='w-fit  bg-gradient-to-r from-cyan-500 to-blue-500' alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-5xl font-mono font-bold py-7 text-blue-600">Login your account</h2>
                    <div className='flex flex-col items-center'>
                        <input type="text" placeholder='Username' className='text-2xl p-3 focus:outline-none placeholder-blue-600 bg-base-100 border-b-4 border-blue-600 w-2/4' />
                        <input type="password" placeholder='Password' className='text-2xl p-3 focus:outline-none placeholder-blue-600 bg-base-100 border-b-4 border-blue-600 w-2/4' />
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default SignUp;