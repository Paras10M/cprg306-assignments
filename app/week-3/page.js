import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping List</h1>
      <GroceryItemList />
    </main>
  );
}
