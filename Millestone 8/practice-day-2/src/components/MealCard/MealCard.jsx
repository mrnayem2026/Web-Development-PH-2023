import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const MealCard = () => {
    const [meals, setMeals] = useState({})

    useEffect(() => {
        const fetchDataFromMealDb = async () => {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();
            setMeals(data);
        }
        fetchDataFromMealDb()
    }, [])

    let aray = meals.meals
    let card ;
    
    if (!aray) {
       console.log("Meal asi ni ");
    } else {
       card = aray.map((meal)=> <Card meal={meal} key={meal.idMeal}></Card>)
    }
    return (
        <>
            {card}
        </>
    );
};

export default MealCard;