import React, { useState } from 'react';

const Mobile = () => {
    const [count,setCount] = useState(100)
    let incressCount =()=>{
             console.log(count);
            if(count <= 0){
                return  alert("0 er teke nice namte parbe na ")
               
            } else{
                setCount(count - 10)
            }

        
    }
    return (
        <>
            <h1>Bettery charge ace : {count} </h1>
            <button onClick={incressCount}>Incress Betery  charge</button>
        </>
    );
};

export default Mobile;