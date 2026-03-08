"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm text-gray-400">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded text-sm ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded text-sm ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}