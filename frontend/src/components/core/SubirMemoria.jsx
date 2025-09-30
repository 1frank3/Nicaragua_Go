import React from "react";
import { CTACard } from "../ui/CTACard"; // <-- 1. Importa el nuevo componente
import { FaPencilAlt, FaBookOpen, FaMapMarkedAlt } from "react-icons/fa"; // Importa los íconos que necesites
import { IoCalendarNumber } from "react-icons/io5";

// --- 2. Define la información de todas tus tarjetas en un arreglo ---
const ctaData = [
  {
    icon: <FaPencilAlt size={40} />,
    iconBgColor: "bg-yellow-100",
    iconTextColor: "text-yellow-600",
    title: "Tienes una historia que contar",
    buttonText: "Sube tu historia",
    linkTo: "/compartir-historia",
  },
  {
    icon: <FaBookOpen size={40} />,
    iconBgColor: "!bg-yellow-100",
    iconTextColor: "text-yellow-600",
    title: "Biblioteca cultural de nicaragua",
    buttonText: "Ver Biblioteca",
    linkTo: "/biblioteca",
  },
  {
    icon: <FaMapMarkedAlt size={40} />,
    iconBgColor: "!bg-yellow-100",
    iconTextColor: "text-yellow-600",
    title: "Explora el mapa interactivo",
    buttonText: "Ir al Mapa",
    linkTo: "/mapa",
  },
  {
    icon: <IoCalendarNumber size={40} />,
    iconBgColor: "!bg-yellow-100",
    iconTextColor: "text-yellow-600",
    title: "Explora el calendario cultural",
    buttonText: "Ir al calendario",
    linkTo: "calendario",
  },
  // ¡Puedes añadir más tarjetas aquí fácilmente!
];

export function SubirMemoria() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* --- 3. Mapea el arreglo para renderizar las tarjetas --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {ctaData.map((card, index) => (
            <CTACard
              key={index}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
              iconTextColor={card.iconTextColor}
              title={card.title}
              buttonText={card.buttonText}
              linkTo={card.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
