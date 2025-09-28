// Card.jsx
export function Card({ title, subtitle, src, alt }) {
  return (
    <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md flex items-center justify-between p-3 hover:shadow-lg transition">
      {/* Imagen */}
      <img
        className="w-16 h-16 object-cover rounded-md border border-blue-400"
        src={src}
        alt={alt}
      />

      {/* Texto */}
      <div className="flex-1 px-4">
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>

      {/* Botón */}
      <span className="font-bold text-gray-900 cursor-pointer hover:underline">
        Ver más
      </span>
    </div>
  );
}


