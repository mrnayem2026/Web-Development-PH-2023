import React from 'react';
import singUpPic from '../../assets/icon/signupPic.png'
import facebook from '../../assets/icon/facebook.png'
import github from '../../assets/icon/github.png'
import google from '../../assets/icon/google.png'
import twitter from '../../assets/icon/twitter.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {

    



    return (
        <div className='container mx-auto lg:py-36 rounded-3xl '>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img src={singUpPic} className='w-fit  bg-gradient-to-r from-cyan-500 to-blue-500' alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-5xl font-mono font-bold py-7 text-blue-600">Singup your account</h2>
                    <div className='flex flex-col items-center'>
                        <input type="text" placeholder='Username' className='text-2xl p-3 focus:outline-none placeholder-blue-600 bg-base-100 border-b-4 border-blue-600 w-2/4' />
                        <input type="password" placeholder='Password' className='text-2xl p-3 focus:outline-none placeholder-blue-600 bg-base-100 border-b-4 border-blue-600 w-2/4' />
                    </div>
                    <div className="card-actions justify-center py-4">
                        <button className="btn btn-primary sing-in-btn ">Singup</button>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <button className='btn btn-primary sign-in-method-btn'><img src={facebook} alt="facebook icon" className='w-10 pr-2 ' />Singup with facebook</button>
                        <button className='btn btn-primary sign-in-method-btn'><img src={github} alt="github icon"  className='w-10 pr-2'/>Singup with github</button>
                        <button className='btn btn-primary sign-in-method-btn'><img src={google} alt="google icon"  className='w-10 pr-2'/>Singup with google</button>
                        <button className='btn btn-primary sign-in-method-btn'><img src={twitter} alt="twitter icon "  className='w-10 pr-2' />Singup with twitter</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default SignUp;