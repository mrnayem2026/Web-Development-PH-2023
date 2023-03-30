import React from 'react';

const Card = (props) => {
    const { idMeal, strMeal, strMealThumb, strArea } = props.meal;
    const {handleCart} = props;
//   console.log(props);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{strMeal}</h2>
                <p>Meal ID : { idMeal}</p>
                <p>Meal Area : {strArea}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={()=>handleCart(props.meal)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;