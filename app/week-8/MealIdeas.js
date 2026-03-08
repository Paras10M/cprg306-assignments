"use client";

import { useEffect, useState } from "react";

// Fetch meals that include an ingredient
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      ingredient
    )}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await res.json();
  return data.meals ?? []; // API returns { meals: [...] } or { meals: null }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    try {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    } catch (err) {
      console.error(err);
      setMeals([]);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="w-full max-w-md bg-zinc-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
      </h2>

      {!ingredient && (
        <p className="text-zinc-300">Select an item to see meal ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-zinc-300">No meal ideas found.</p>
      )}

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="bg-zinc-800 p-3 rounded">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}