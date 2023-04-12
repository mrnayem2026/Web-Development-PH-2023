import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import reader from '../../assets/reader.json'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row container mx-auto py-8'>
            {/* content of home Start  */}
            <div className='py-9'>
                <p className='badge'>ON SALE!</p>
                <p>A reader lives a <br />
                    thousand lives <span>before he dies</span></p>
                <p>
                    Books are a uniquely portable magic. Books serve to show a man that those
                    original thoughts of his aren’t very new after all.
                    The man who does not read good books is no better than the man who can’t.
                </p>
                <div>
                    <Link to="/books">
                        <button className='bg-sky-300'>
                            Visit Store
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </button>
                    </Link>
                </div>
            </div>
            {/* content of home End  */}

            {/* Lottie Animation */}
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;