export default function Item({ name, quantity, category }) {
    return (
      <li className="border border-white/50 rounded-md p-4 mb-4 max-w-3xl">
        <p className="text-lg">
          {name}
        </p>
        <p className="text-sm mt-1">Quantity: {quantity}</p>
        <p className="text-sm">Category: {capitalize(category)}</p>
      </li>
    );
  }
  
  function capitalize(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }