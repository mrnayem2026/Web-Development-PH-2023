import React from 'react';
import ListName from '../ListName/ListName';

const LeftSide = (props) => {
    let name = [];

   

    for (let id of props.mealInfo) {
        name.push(id.strMeal);
    }
    let listMealName = name.map((item)=> <ListName key={item} name={item}></ListName> )
    console.log(listMealName);
    // console.log(name);
    return (
        <div className='bg-orange-400 p-10 rounded-lg'>
            <h1 className='text-2xl font-extrabold text-black'>Meal Name</h1>
            <ul>{listMealName}</ul>
        </div>
    );
};

export default LeftSide;