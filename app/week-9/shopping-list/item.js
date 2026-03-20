export default function Item({ item, onSelect }) {
    return (
      <li
        onClick={() => onSelect(item)}
        className="border border-gray-500 rounded-lg p-3 cursor-pointer hover:bg-zinc-900"
      >
        <p className="text-lg font-semibold">{item.name}</p>
  
        <p className="text-sm text-gray-300">
          Quantity: {item.quantity}
        </p>
  
        <p className="text-sm text-gray-300">
          Category: {item.category}
        </p>
      </li>
    );
  }