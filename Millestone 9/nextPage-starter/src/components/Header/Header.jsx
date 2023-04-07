import React, { useState } from 'react';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenu, setIsmenu] = useState(false)
    return (
        <div className=' bg-gray-100'>
            <div className='relative flex rounded-sm justify-between px-6  container mx-auto '>
                {/* large display logo and navigation bar [Start]  */}
                <Link to="/">
                    <div className='flex gap-3 py-6'>
                        <span>
                            <BoltIcon className='h-6 w-6 text-blue-500'></BoltIcon>
                        </span>
                        <p className='text-xl font-bold'>nextPage</p>
                    </div>
                </Link>
                <div >
                    <ul className='hidden lg:flex  justify-between gap-10 py-6 font-bold text-lg'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="books">Books</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="abouts">About us</NavLink>
                        </li>
                    </ul>
                </div>
                {/* large display logo and navigation bar [Start]  */}

                {/* Mobile Section start  */}
                <div className='lg:hidden'>
                    <button
                        aria-label='Menu bar'
                        title='Menu bar'
                        onClick={() => setIsmenu(true)}
                        className='pt-6'
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {
                        isMenu && (
                            <div className='absolute top-5 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded-lg shadow-sm'>
                                    {/* mobile display logo and navigation bar [Start]  */}
                                    <div className='flex justify-between'>
                                        <div>
                                            <Link to='/' className='inline-flex'>
                                                <BoltIcon className='h-6 w-6 text-blue-500' />
                                                <span className='uppercase px-3 font-bold text-xl tracking-wide'>nextPage</span>
                                            </Link>
                                        </div>

                                        <div>
                                            <button
                                                aria-label='Xros Menu'
                                                title='Xros Menu'
                                                onClick={() => setIsmenu(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/*mobile display  logo and navigation bar [end]  */}

                                    {/* Navbar start  */}
                                    <ul className=' py-3 font-bold text-lg'>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="books">Books</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="abouts">About us</NavLink>
                                        </li>
                                    </ul>
                                    {/* Navbar end */}
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* Mobile Section end */}
            </div>
        </div>
    );
};

export default Header;