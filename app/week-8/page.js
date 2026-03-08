"use client";

import { useState } from "react";

import NewGroceryItem from "./NewGroceryItem";
import GroceryItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

import itemsData from "./grocery-items.json";

// Cleans item names like: "chicken breast, 1 kg 🍗" -> "chicken breast"
function cleanItemName(name) {
  if (!name) return "";

  // remove anything after comma (sizes etc.)
  let cleaned = name.split(",")[0].trim();

  // remove emojis + extra symbols (simple approach)
  cleaned = cleaned.replace(/[\p{Extended_Pictographic}]/gu, "").trim();

  // collapse extra spaces
  cleaned = cleaned.replace(/\s+/g, " ");

  return cleaned;
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-6">
          <NewGroceryItem onAddItem={handleAddItem} />
          <GroceryItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}