import React from 'react';
import { Link } from 'react-router-dom';

export function CTACard({ icon, iconBgColor, iconTextColor, title, buttonText, linkTo }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Ícono dinámico */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <div className={`rounded-xl p-5 ${iconBgColor} ${iconTextColor}`}>
          {icon}
        </div>
      </div>
      
      {/* Contenido dinámico */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <Link to={linkTo} className="mt-4 inline-block">
          <button className="!bg-[#F29F05] hover:!bg-[#d98e05] !text-[#012840] font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}