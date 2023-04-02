import React from 'react';

const SideBar = (props) => {
    console.log(props);
    let preveuis = props.watchTime;
    let total =0+ preveuis ;

    return (
        <div className=' sticky top-0 bg-cyan-600 rounded-lg p-10 ml-4 text-black'>
            <h1 className='text-center text-5xl font-extrabold'>Your Watch Time</h1>
            <h1 className=' text-lg font-semibold mt-5'>Total Watch Time</h1>
            <input type="text" value={total} disabled className='p-1 rounded-lg text-lg' />

            <h1 className='text-center text-lg font-semibold mt-5'>Add Break Time</h1>
            <div className='text-center mt-3'> 
                <button className="btn btn-info  mr-1 text-xl">15</button>
                <button className="btn btn-success mr-1 text-xl">25</button>
                <button className="btn btn-warning mr-1 text-xl">35</button>
                <button className="btn btn-error text-xl">45</button>
                <input type="text" value={10} disabled className='p-1 rounded-lg mt-3 text-lg' />
            </div>
            <button className="btn btn-warning w-full mt-3 text-black">Complete</button>
        </div>
    );
};

export default SideBar;