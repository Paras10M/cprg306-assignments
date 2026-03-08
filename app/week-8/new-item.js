"use client";

import { useState } from "react";

function makeId() {
  // Best option if available:
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  // Fallback:
  return Math.random().toString(36).slice(2, 11);
}

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanedName = name.trim();
    if (!cleanedName) return;

    const item = {
      id: makeId(),
      name: cleanedName,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white text-black p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="name">
          Item Name
        </label>
        <input
          id="name"
          className="w-full border rounded-md p-3"
          placeholder="e.g., milk, 4 L 🥛"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <p className="block mb-2 text-sm font-medium">Quantity (1–20)</p>
        <p className="mb-3 text-lg">Current: {quantity}</p>

        <div className="flex gap-4">
          <button
            type="button"
            className="w-16 h-16 rounded-md bg-gray-200 text-2xl"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>

          <button
            type="button"
            className="w-16 h-16 rounded-md bg-blue-600 text-white text-2xl"
            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="w-full border rounded-md p-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg"
      >
        Add Item
      </button>
    </form>
  );
}