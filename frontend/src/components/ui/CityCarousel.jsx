// src/components/ui/CityCarousel.jsx

import React from 'react';
import Slider from 'react-slick'; // Importar el componente Slider
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Íconos para las flechas

// Componentes personalizados para las flechas de navegación
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 z-10 flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-200 focus:outline-none`}
      style={{ ...style, display: "block", right: "-15px" }} // Ajusta la posición si es necesario
      onClick={onClick}
    >
      <FaChevronRight size={20} className="text-gray-700" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 z-10 flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-200 focus:outline-none`}
      style={{ ...style, display: "block", left: "-15px" }} // Ajusta la posición si es necesario
      onClick={onClick}
    >
      <FaChevronLeft size={20} className="text-gray-700" />
    </div>
  );
}

export function CityCarousel({ items = [], onSelectCity, activeCity }) {
  // Configuración del carrusel para react-slick
  const settings = {
    dots: true, // Mostrar los puntos de navegación
    infinite: false, // Desactivar el bucle infinito si hay pocas tarjetas
    speed: 500,
    slidesToShow: 3, // Mostrar 3 tarjetas a la vez en desktop
    slidesToScroll: 1, // Deslizar 1 tarjeta a la vez
    arrows: true, // Mostrar las flechas de navegación
    nextArrow: <SampleNextArrow />, // Usar nuestro componente de flecha personalizada
    prevArrow: <SamplePrevArrow />, // Usar nuestro componente de flecha personalizada
    responsive: [ // Configuración para diferentes tamaños de pantalla
      {
        breakpoint: 1024, // Para pantallas de 1024px o menos (ej. tablets grandes)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Para pantallas de 768px o menos (ej. tablets pequeñas y móviles)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Centra el elemento activo
          centerPadding: '20px', // Espacio extra para el centrado
          arrows: false, // Ocultar flechas en móvil para una mejor experiencia táctil
        }
      }
    ]
  };

  return (
    <div className="relative w-full px-8 pb-10"> {/* Añadido padding para las flechas y puntos */}
      <Slider {...settings}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className="px-2" // Padding horizontal dentro de cada slide para separación visual
            onClick={() => onSelectCity(item.city)}
          >
            <div 
              className={`relative h-52 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out
                          ${activeCity === item.city ? 'ring-4 ring-yellow-500 ring-offset-2 ring-offset-gray-100 scale-105' : 'hover:scale-103'}`}
              style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay oscuro para la legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              
              {/* Etiqueta de la Ciudad */}
              <span className="absolute top-4 left-4 bg-[#F29F05] text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.city}
              </span>

              {/* Título del Lugar Turístico y Ciudad */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{item.touristSpot}</h3>
                <p className="text-sm">{item.city}</p> 
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}