"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">
        {ingredient ? `Meal ideas for “${ingredient}”` : "Meal ideas (select an item)"}
      </h2>

      {!ingredient && (
        <p className="text-gray-400">Choose an item to see ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-400">No meal ideas found.</p>
      )}

      {ingredient && meals.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border border-white rounded-lg p-4 text-lg leading-snug hover:bg-zinc-900"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}