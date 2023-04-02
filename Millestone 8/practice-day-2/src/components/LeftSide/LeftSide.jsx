import React from 'react';
import ListName from '../ListName/ListName';

const LeftSide = (props) => {
    let name = [];

//    console.log(props);

    for (let id of props.mealInfo) {
        name.push(id.strMeal);
    }
    let leng = name.length;
    let listMealName = name.map((item,index)=> <ListName key={index} name={item}></ListName> )
    // console.log(listMealName);
    // console.log(name);
    // console.log("name.length----",name.length);
    return (
        <div className='bg-orange-400 p-10 rounded-lg'>
            <h1 className='text-2xl font-extrabold text-black'>Meal Name</h1>
            <h1 className='text-2xl font-extrabold text-black'>Total oreder : {leng}</h1>
            <ul>{listMealName}</ul>
        </div>
    );
};

export default LeftSide;