"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Shopping List
      </h1>

      {/* Keep this if professor requires form */}
      {/* <NewItem onAddItem={handleAddItem} /> */}

      <div className="w-full max-w-3xl">
        <ItemList items={items} />
      </div>
    </main>
  );
}