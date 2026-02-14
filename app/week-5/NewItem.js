"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(`Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-zinc-900 text-white p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block mb-2 text-sm font-medium" htmlFor="name">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md text-black"
          placeholder="e.g., Bread"
        />
      </div>

      <div className="flex gap-3 items-end">
        <div className="flex-1">
          <label className="block mb-2 text-sm font-medium" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => {
              const raw = e.target.value;

              // If user clears the input, keep it valid
              if (raw === "") {
                setQuantity(1);
                return;
              }

              const value = Number(raw);

              if (Number.isNaN(value)) {
                setQuantity(1);
              } else if (value < 1) {
                setQuantity(1);
              } else if (value > 99) {
                setQuantity(99);
              } else {
                setQuantity(value);
              }
            }}
            className="w-full p-2 rounded-md text-black"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-2 text-sm font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md text-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="h-[42px] px-4 rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold"
          aria-label="Add item"
          title="Add item"
        >
          +
        </button>
      </div>
    </form>
  );
}
