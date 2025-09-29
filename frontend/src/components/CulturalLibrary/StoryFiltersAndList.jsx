import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import rubend from "../../assets/img/poetas/rubend.webp"
import gueguense from "../../assets/img/historias/gueguense.webp"
import nacatamal from "../../assets/img/comidatipica/nacatamal.webp"
import gallopinto from "../../assets/img/comidatipica/gallopinto.webp"

// 1. --- DATOS DE EJEMPLO (Esto vendra de la API en el futuro) ---
const mockStories = [
  { id: 1, title: 'El Güegüense', city: 'Masaya', category: 'Historias', imageUrl: gueguense },
  { id: 2, title: 'La Leyenda de la Mocuana', city: 'Matagalpa', category: 'Cuentos', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Gallo Pinto Nicaragüense', city: 'Managua', category: 'Comida típica', imageUrl: gallopinto },
  { id: 4, title: 'Rubén Darío, Príncipe', city: 'León', category: 'Poetas', imageUrl: rubend },
  { id: 5, title: 'Historia de la Catedral de Granada', city: 'Granada', category: 'Historias', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Nacatamal de Domingo', city: 'Masaya', category: 'Comida típica', imageUrl: nacatamal },
  // ... más historias
];

const categories = ['Todas', 'Cuentos', 'Historias', 'Poetas', 'Comida típica'];

export function StoryFiltersAndList({ selectedCity }) {
  // 2. --- ESTADOS PARA LOS FILTROS ---
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStories, setFilteredStories] = useState(mockStories);

  // 3. --- LÓGICA DE FILTRADO ---
  useEffect(() => {
    let result = mockStories;

    if (selectedCity !== 'Todas') {
      result = result.filter(story => story.city === selectedCity);
    }
    if (activeCategory !== 'Todas') {
      result = result.filter(story => story.category === activeCategory);
    }
    if (searchTerm) {
      result = result.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStories(result);
  }, [selectedCity, activeCategory, searchTerm]); // Se ejecuta cada vez que un filtro cambia

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
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300
                        ${activeCategory === category ? '!bg-[#F29F05] !text-[#012840]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- LISTA DE RESULTADOS --- */}
      <div className="space-y-4">
        {filteredStories.length > 0 ? (
          filteredStories.map(story => (
            <div key={story.id} className="flex items-center space-x-4 p-4 border-b border-gray-100 last:border-b-0">
              <img src={story.imageUrl} alt={story.title} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800">{story.title}</h3>
                <p className="text-sm text-gray-500">{story.city}</p>
              </div>
              <Link to={`/historia/${story.id}`} className="flex-shrink-0 text-gray-800 font-bold hover:text-yellow-600 transition-colors">
                Ver más
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No se encontraron historias que coincidan con tu búsqueda.</p>
        )}
      </div>
    </div>
  );
}