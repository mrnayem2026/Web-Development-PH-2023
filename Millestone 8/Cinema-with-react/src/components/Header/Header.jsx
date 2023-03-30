import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto py-10">
            <div className="flex-1">
                <a className="normal-case text-3xl font-bold">Cinema with React</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71JxA6I+sgL._AC_SL1000_.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;