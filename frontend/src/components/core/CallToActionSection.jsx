
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaBookOpen } from 'react-icons/fa';

export function CallToActionSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Usamos Grid para un layout responsive de 2 columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* --- Tarjeta 1: Tienes una historia que contar --- */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center text-center md:text-left">
            {/* Ícono */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="bg-yellow-100 text-[#F29F05] rounded-xl p-5">
                <FaPencilAlt size={40} />
              </div>
            </div>
            {/* Contenido */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Tienes una historia que contar
              </h2>
              <Link to="historia" className="mt-4 inline-block">
                <button className="!bg-[#F29F05] hover:bg-[#d98e05] !text-[#012840] font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                  Sube tu historia
                </button>
              </Link>
            </div>
          </div>

          {/* --- Tarjeta 2: Biblioteca cultural --- */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center text-center md:text-left">
            {/* Ícono */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="bg-yellow-100 text-[#F29F05] rounded-xl p-5">
                <FaBookOpen size={40} />
              </div>
            </div>
            {/* Contenido */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Biblioteca cultural de nicaragua
              </h2>
              <Link to="/biblioteca" className="mt-4 inline-block">
                <button className="!bg-[#F29F05] hover:bg-[#d98e05] !text-[#012840] font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                  Ver Biblioteca
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}