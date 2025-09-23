import { MapPinIcon } from "@heroicons/react/20/solid";
import { lugares } from "./Ubicaciones";

export default function Lugares({ onSelect }) {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4 hidden md:block">
      <a>HOME | PUBLICAR | JUEGO</a>
      <h3 className="text-lg font-semibold mb-4">Lugares turísticos</h3>
      <ul className="space-y-2">
        {lugares.map((lugar) => (
          <li key={lugar.id}>
            <button
              onClick={() => onSelect(lugar)}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            >
              <MapPinIcon className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800">{lugar.nombre}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
