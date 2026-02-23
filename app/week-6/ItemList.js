"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    const aVal = (a[sortBy] ?? "").toString().toLowerCase();
    const bVal = (b[sortBy] ?? "").toString().toLowerCase();
    return aVal.localeCompare(bVal);
  });

  const activeBtn = "bg-blue-600 text-white";
  const inactiveBtn = "bg-white text-black";

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-white/70">Sort by:</span>

        <button
          className={`px-4 py-1 rounded ${sortBy === "name" ? activeBtn : inactiveBtn}`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className={`px-4 py-1 rounded ${sortBy === "category" ? activeBtn : inactiveBtn}`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}