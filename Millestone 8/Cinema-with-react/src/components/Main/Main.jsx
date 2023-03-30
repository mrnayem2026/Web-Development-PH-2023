import React, { useEffect, useState } from 'react';

const Main = () => {

    const [cinemas,setCinemas] = useState([]);

    useEffect(()=>{
        const cinemaFetch =async ()=>{
            const res = await fetch('data.json');
            const data = await res.json();
            console.log(data);
        }
        setCinemas()
    },[])


    return (
        <>
            <div>

            </div>
        </>
    );
};

export default Main;