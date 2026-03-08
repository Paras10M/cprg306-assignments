"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center p-8">
      
      {/* Centered container */}
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Week 7 — Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />

      </div>

    </main>
  );
}