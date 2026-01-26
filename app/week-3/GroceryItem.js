export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="w-full max-w-md mx-auto bg-black border border-white text-white rounded-md p-4 mb-4">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
