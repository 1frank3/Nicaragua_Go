import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/img/logo.png'; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Mapa', path: 'mapa' },
    { title: 'Juegos', path: 'Game' },
    { title: 'Biblioteca Cultural', path: 'biblioteca' },
    { title: 'Calendario', path: 'calendario' },
  ]; //todo agregar rutas faltantes 28/09/2025 10:04 pm

  return (
    <header className="bg-[#0a1e30] text-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
       
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Memoria Viva Nicaragua Logo" className="h-20" />
        </Link>

       
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path} 
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* --- Botón de Menú Móvil (Hamburguesa) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* --- Panel del Menú Móvil (se muestra condicionalmente) --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a1e30] shadow-xl z-50">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="py-2 px-2 text-center hover:bg-[#1c3a56] rounded transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}