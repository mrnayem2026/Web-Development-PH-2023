import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvides';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [succesLogIn,SetSuccesLogIn] = useState("");
    const [errorLogIn,SeterrorLogIn] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);


        signIn(email,password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                SetSuccesLogIn("Hey! Welcome back. Bro/Sis")
                form.reset();
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode);
                // console.log(errorMessage);
                console.log(error);
                SeterrorLogIn("Please register");
                form.reset();
            });

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                    <h1>{succesLogIn}</h1>
                    <h1>{errorLogIn}</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover">
                            New to Auth Master? Please Register
                        </Link>
                    </p>
                    <div className='text-center p-3'>
                        <button className="btn btn-primary">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;