import React from 'react';

const Header = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="navbar my-10">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl"><img src="https://www.themealdb.com/images/logo-small.png" alt="TheMealDB"/></a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search by meal name" className="input input-bordered" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;