import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { mockStories } from "../../data/stories";

const categories = ["Todas", "Cuentos", "Historias", "Poetas", "Comida típica"];

export function StoryFiltersAndList({ selectedCity }) {
  // --- ESTADOS PARA LOS FILTROS ---
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStories, setFilteredStories] = useState([]); // Se inicializa vacío

  // --- LÓGICA DE FILTRADO ---
  useEffect(() => {
    let result = mockStories; // Usa los datos importados

    if (selectedCity !== "Todas") {
      result = result.filter((story) => story.city === selectedCity);
    }
    if (activeCategory !== "Todas") {
      result = result.filter((story) => story.category === activeCategory);
    }
    if (searchTerm) {
      result = result.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredStories(result);
  }, [selectedCity, activeCategory, searchTerm]);

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
      {/* --- BARRA DE BÚSQUEDA --- */}
      <div className="relative mb-6">
        <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar cuentos, poetas, recetas"
          className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* --- BOTONES DE FILTRO POR CATEGORÍA --- */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200 shadow-md transform hover:-translate-y-0.5
                        ${
                          activeCategory === category
                            ? "!bg-[#F29F05] text-black scale-105 shadow-lg"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- LISTA DE RESULTADOS --- */}
      <div className="space-y-4">
        {filteredStories.length > 0 ? (
          filteredStories.map((story) => (
            <div
              key={story.id}
              className="flex items-center space-x-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded-lg"
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500">{story.city}</p>
              </div>
              <Link
                to={`/biblioteca/${story.slug}`}
                className="flex-shrink-0 text-gray-800 font-bold hover:text-yellow-600 transition-colors"
              >
                Ver más
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            No se encontraron historias que coincidan con tu búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}