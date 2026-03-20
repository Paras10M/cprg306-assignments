"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now().toString(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-5 rounded-lg w-full"
    >
      <label className="block text-lg mb-1">Item Name</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g., milk, 4 L 🥛"
        required
        className="w-full border rounded p-2 text-base text-black placeholder-black mb-4"
      />

      <label className="block text-lg mb-1">Quantity (1–20)</label>
      <p className="text-sm mb-2">Current: {quantity}</p>

      <div className="flex gap-3 mb-4">
        <button
          type="button"
          onClick={decrement}
          className="px-4 py-2 bg-gray-200 rounded text-xl"
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded text-xl"
        >
          +
        </button>
      </div>

      <label className="block text-lg mb-1">Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border rounded p-2 text-base text-black mb-4"
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen Foods">Frozen Foods</option>
        <option value="Canned Goods">Canned Goods</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks">Snacks</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded text-lg"
      >
        Add Item
      </button>
    </form>
  );
}