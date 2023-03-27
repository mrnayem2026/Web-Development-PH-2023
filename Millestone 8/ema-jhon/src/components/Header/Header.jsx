import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className=' bg-slate-700 text-white'>
            <div className=' container mx-auto flex justify-between py-4'>
                <img src={logo} alt="" />
                <div>
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        <li><a>Order</a></li>
                        <li><a>Order Review</a></li>
                        <li><a>Manage Inventory</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;