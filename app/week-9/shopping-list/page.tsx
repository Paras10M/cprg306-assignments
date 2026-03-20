"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="p-6">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          You must be logged in to view this page.
        </h2>
        <Link href="/week-9" className="text-blue-600 underline">
          Go back to login
        </Link>
      </main>
    );
  }

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item: any) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "")
      .trim();

    setSelectedItemName(cleanName);
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Check console.");
    }
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Shopping List</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <p className="mb-4">
        Logged in as: {user.displayName || "User"} ({user.email || "No email"})
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}