import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Main = (props) => {
    const [cinemas,setCinemas] = useState([]);
    const handleWatchTime = props.handleWatchTime;

    useEffect(()=>{
        const cinemaFetch =async ()=>{
            const res = await fetch('data.json');
            const data = await res.json();
            setCinemas(data);
        }
        cinemaFetch()
    },[])


    return (
        <>
            {
                cinemas.map((cinema,index)=>    <SingleCard  key={index} cinema={cinema} handleWatchTime={handleWatchTime}></SingleCard>)
            }
        </>
    );
};

export default Main;