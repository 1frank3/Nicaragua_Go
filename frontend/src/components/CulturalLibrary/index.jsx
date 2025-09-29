import React, { useState } from 'react';
import { CityCarousel } from '../../components/ui/CityCarousel';
import { StoryFiltersAndList } from './StoryFiltersAndList';
import catedralLeonImg from "../../assets/img/ciudades/catedralLeon.webp"
import volcanMasaya from "../../assets/img/ciudades/volcanMasaya.webp"
import canonSomoto from "../../assets/img/ciudades/canonSomoto.webp"
import catedralGranada from "../../assets/img/ciudades/catedralGranada.webp"
import isletaGranada from "../../assets/img/ciudades/isletaGranada.webp"


export function CulturalLibraryPage() {
  const [selectedCity, setSelectedCity] = useState('Todas'); // Estado para el filtro de ciudad

  const cityCarouselData = [
    { id: 'l1', city: 'León', touristSpot: 'Catedral de León', imageUrl: catedralLeonImg },
    { id: 'g1', city: 'Granada', touristSpot: 'Isletas de Granada', imageUrl: isletaGranada },
    { id: 's1', city: 'Madriz', touristSpot: 'Canon de somoto', imageUrl: canonSomoto },
    { id: 'm2', city: 'Masaya', touristSpot: 'Volcá Masaya', imageUrl: volcanMasaya },
    { id: 'g2', city: 'Granada', touristSpot: 'Catedral de Granada', imageUrl: catedralGranada },
    // Reemplaza estas URLs con imágenes reales de tus ciudades
  ];

  const handleSelectCity = (city) => {
    // Si la ciudad clickeada es la misma que la activa, desactiva el filtro
    setSelectedCity(city === selectedCity ? 'Todas' : city); 
    console.log(`Ciudad seleccionada para filtrar: ${city}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explora la memoria cultural de Nicaragua</h1>
        
        <CityCarousel 
          items={cityCarouselData} 
          onSelectCity={handleSelectCity} 
          activeCity={selectedCity} 
        />

          <div className="mt-8">
          <StoryFiltersAndList selectedCity={selectedCity} />
        </div>

        {/* <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Historias de {selectedCity === 'Todas' ? 'todas las ciudades' : selectedCity}</h2>
          <p>Contenido filtrado de la biblioteca...</p>
        </div> */}
      </div>
    </div>
  );
}