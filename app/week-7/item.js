"use client";

export default function Item({ item }) {
  return (
    <li className="border border-gray-500 rounded-md p-4">
      <p className="text-xl capitalize">{item.name}</p>
      <p className="text-lg">Quantity: {item.quantity}</p>
      <p className="text-lg capitalize">Category: {item.category}</p>
    </li>
  );
}