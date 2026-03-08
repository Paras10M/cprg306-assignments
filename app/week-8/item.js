export default function GroceryItem({ item, onSelect }) {
    return (
      <li
        onClick={() => onSelect(item)}
        className="cursor-pointer hover:bg-zinc-800 p-2 rounded"
      >
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-zinc-300">
          Buy {item.quantity} in {item.category}
        </p>
      </li>
    );
  }