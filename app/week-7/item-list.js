"use client";

import { useMemo, useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // "name" | "category"

  const sortedItems = useMemo(() => {
    const copy = [...items]; // IMPORTANT: don't mutate props

    if (sortBy === "name") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Sort by category, then by name (nice UX)
      copy.sort((a, b) => {
        const c = a.category.localeCompare(b.category);
        if (c !== 0) return c;
        return a.name.localeCompare(b.name);
      });
    }

    return copy;
  }, [items, sortBy]);

  return (
    <section className="mt-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gray-400">Sort by:</span>

        <button
          className={`px-6 py-2 rounded-md border ${
            sortBy === "name" ? "bg-blue-600 border-blue-600" : "bg-white text-black"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className={`px-6 py-2 rounded-md border ${
            sortBy === "category" ? "bg-blue-600 border-blue-600" : "bg-white text-black"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}