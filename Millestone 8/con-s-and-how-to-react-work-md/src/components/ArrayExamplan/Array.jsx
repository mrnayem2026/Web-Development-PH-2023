import React, { useState } from 'react';
import { guns } from '../../../test';


const Array = () => {
    const [data, setData] = useState(guns)
    const removeName =(id)=>{
        setData(data.filter((singleData =>  singleData.id !== id)))
    }
    const removeAllData =()=>{
        setData([])
    }
    const ResetAllData =()=>{
        setData(guns)
    }

    return (
        <>
            <div className='text-center'>

                {
                    data.map((singleData) => (
                        <div  key={singleData.id}>
                                <p className='text-4xl text-sky-500'>{singleData.name}</p>
                                <button className='btn btn-warning m-4' onClick={()=> removeName(singleData.id)}>Remove Name</button>
                        </div>
                    ))
                }
                <button className='btn btn-primary m-4' onClick={removeAllData}>Remove All</button>
                <button className='btn btn-success m-4' onClick={ResetAllData}>Reset All</button>
            </div>
        </>
    );
};

export default Array;