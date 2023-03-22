import React, { useEffect, useState } from 'react';
import BgImage from '../assets/bg.jpg';

const RandomAdvice = () => {
    const [advice,setAdvice] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('https://api.adviceslip.com/advice');
            const data = await res.json();
            setAdvice(data.slip.advice);
        }
        fetchData();
    },[])

    const ReloadPage = ()=> {
            window.location.reload();
    }
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={BgImage} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-center text-4xl font-bold text-cyan-200">Random Advice!</h2>
                    <p className='text-2xl my-5'>"{advice}"</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary" onClick={ReloadPage}>Generate Advice</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default RandomAdvice;