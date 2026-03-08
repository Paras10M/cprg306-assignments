"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

function cleanItemName(name) {
  if (!name) return "";

  let cleaned = name.split(",")[0].trim();
  cleaned = cleaned.replace(/[\p{Extended_Pictographic}]/gu, "");
  cleaned = cleaned.replace(/[^\w\s-]/g, "");
  cleaned = cleaned.trim().toLowerCase();

  return cleaned;
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center p-6">
      <div className="w-full max-w-5xl">

        <h1 className="text-3xl font-bold mb-6">
          Shopping List + Meal Ideas
        </h1>

        <div className="flex flex-col md:flex-row gap-6">

          <div className="w-full md:w-1/2">
            <NewItem onAddItem={handleAddItem} />

            <div className="mt-5">
              <ItemList
                items={items}
                onItemSelect={handleItemSelect}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>

        </div>
      </div>
    </main>
  );
}