// Card.jsx
export function Card({ title, subtitle, src, alt }) {
  return (
   <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start md:justify-between p-3 hover:shadow-lg transition">
  {/* Imagen */}
  <img
    className="w-24 h-24 md:w-16 md:h-16 object-cover rounded-md border border-blue-400"
    src={src}
    alt={alt}
  />

  {/* Texto */}
  <div className="flex-1 text-center md:text-left px-0 md:px-4 mt-3 md:mt-0">
    <h5 className="text-lg font-bold text-gray-900">{title}</h5>
    <p className="text-gray-600 text-sm">{subtitle}</p>
  </div>

  {/* Botón */}
  <span className="mt-2 md:mt-0 font-bold text-blue-600 cursor-pointer hover:underline">
    Ver más
  </span>
</div>

  );
}


