"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-800 max-w-sm">
      <input
        className="w-full p-2 mb-2 text-black"
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="flex gap-2 mb-2">
        <input
          className="w-20 p-2 text-black"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <select
          className="flex-1 p-2 text-black"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">produce</option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="meat">meat</option>
          <option value="frozen">frozen</option>
          <option value="canned">canned</option>
          <option value="dry">dry</option>
          <option value="beverages">beverages</option>
          <option value="snacks">snacks</option>
          <option value="household">household</option>
          <option value="other">other</option>
        </select>
      </div>

      <button
        className="w-full p-2 bg-blue-600 hover:bg-blue-500"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}