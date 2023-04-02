import React from 'react';

const SingleCard = (props) => {
    const { category, description, imdbRating, movieName, poster, watchTime } = props.cinema;

    const handleWatchTime = props.handleWatchTime;
    return (
        <div className="card w-full bg-base-100 shadow-xl mt-5">
            <figure><img src={poster} alt="Poster" className='w-96 p-10' /></figure>
            <div className="card-body text-center">
                <h2 className="text-4xl font-black">{movieName}</h2>
                <p className='text-lg font-serif'>{description}</p>
                <p className='text-lg font-serif'>Category: {category}</p>
                <h3>Watch Tiem : {watchTime}</h3>
                <h3>IMD Rating : {imdbRating}</h3>
                <div className="card-actions justify-center pt-5">
                    <button className="btn btn-primary" onClick={()=>handleWatchTime(watchTime)}>Watch Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;