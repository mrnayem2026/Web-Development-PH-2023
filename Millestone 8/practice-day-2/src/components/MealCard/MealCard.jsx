import React, { useEffect, useState } from 'react';
import { addToDb } from "../../assets/utilities/fakedb.js";
import Card from '../Card/Card';
import LeftSide from '../LeftSide/LeftSide';

const MealCard = () => {
    const [meals, setMeals] = useState({})
    const [mealInfo,setMealIfo] = useState([])

    useEffect(() => {
        const fetchDataFromMealDb = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();
            setMeals(data);
        }
        fetchDataFromMealDb()
    }, [])
    
    const handleCart =(mealName)=>{
        addToDb(mealName.idMeal)
        let selectMela = [...mealInfo,mealName]
        setMealIfo(selectMela); 
    }

    let aray = meals.meals
    let card;

    if (!aray) {
        console.log("Meal asi ni ");
    } else {
        card = aray.map((meal) => <Card meal={meal} key={meal.idMeal} handleCart={handleCart}></Card>)
    }
    return (
        <>
            {
                card
            }
            <div className='w-1/4'>
                <LeftSide mealInfo={mealInfo}></LeftSide>
            </div>
        </>
    );
};

export default MealCard;