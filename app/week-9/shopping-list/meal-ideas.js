"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);


    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    const loadMealIdeas = async () => {
        if (!ingredient) return;
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className="meal-ideas p-5 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Meal Ideas for "{ingredient}"</h2>
            <ul className="list-none p-0">
                {meals && meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="mb-4">
                            <img className="w-40 h-40 object-cover rounded-lg" src={meal.strMealThumb} alt={meal.strMeal} />
                            <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                        </li>
                    ))
                ) : (
                    <li>No meal ideas found for "{ingredient}"</li>
                )}
            </ul>
        </div>
    )
}