import { Link } from 'react-router-dom';
import '../HeroSection/HeroSection.css';
import backgroundImage from '../../assets/img/nicaragua-background.webp';

export function HeroSection() {
  return (
    <section
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="hero-overlay"></div>

      {/* Contenido del Hero */}
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center leading-tight">
          Preserva y comparte la memoria de Nicaragua
        </h1>
        <p className="mt-4 text-xl text-white">
          Nicaragua Go
        </p>
        <Link to="/mapa" className="mt-8">
          <button className="!bg-[#F29F05] hover:bg-[#d98e05] !text-[#012840] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:scale-105">
            Ver mapa interactivo
          </button>
        </Link>
      </div>
    </section>
  );
}