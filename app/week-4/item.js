export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-white/5 border border-white/10 rounded-lg p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-sm px-2 py-1 rounded-md bg-white/10">
            x{quantity}
          </span>
        </div>
  
        <div className="mt-2 text-sm text-white/70">
          Category: <span className="capitalize">{category}</span>
        </div>
      </li>
    );
  }
  