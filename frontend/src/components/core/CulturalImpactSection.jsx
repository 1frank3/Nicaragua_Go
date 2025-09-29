import React from "react";
// Importamos algunos íconos de ejemplo de react-icons. ¡Puedes cambiarlos!
import { FaUsers, FaShieldAlt, FaBook, FaBullhorn } from "react-icons/fa";

// --- 1. Contenido de las tarjetas en un arreglo (fácil de modificar) ---
const impactData = [
  {
    icon: <FaUsers size={24} />,
    title: "Conexión Intergeneracional",
    description:
      "Facilita que abuelos y nietos compartan historias y recuerdos, fortaleciendo los lazos familiares y transmitiendo el conocimiento de una generación a otra.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Fortalecimiento de la Identidad",
    description:
      "Permite a los ciudadanos explorar su herencia, comprendiendo las raíces de su identidad colectiva y el orgullo de ser nicaragüense.",
  },
  {
    icon: <FaBook size={24} />,
    title: "Recurso Educativo Vital",
    description:
      "Ofrece a estudiantes, investigadores y al público en general una fuente inigualable de material histórico y cultural auténtico para el aprendizaje.",
  },
  {
    icon: <FaBullhorn size={24} />,
    title: "Empoderamiento Comunitario",
    description:
      "Brinda a las comunidades la herramienta para documentar y celebrar sus propias historias locales, asegurando que ninguna memoria se pierda.",
  },
];

export function CulturalImpactSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- 2. Título y Párrafo Principal (no están en una tarjeta) --- */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Impacto Cultural de Nicaragua Go
          </h2>
          <p className="mt-4 text-lg text-[#012840] text-justify">
            <strong>Nicaragua Go trasciende la simple digitalización</strong>,
            creando un impacto profundo y duradero en la identidad y el tejido
            social de la nación. Al conectar el pasado con el presente, la
            plataforma fomenta una comprensión más rica y una apreciación más
            profunda de la herencia nicaragüense. Además, impulsa la
            preservación cultural mediante el uso de la tecnología como puente
            entre generaciones, permitiendo que jóvenes, adultos y comunidades
            enteras redescubran y compartan tradiciones, relatos y expresiones
            propias de su tierra. <br /> <br /> Con su enfoque innovador,{" "}
            <strong>Nicaragua Go no solo rescata la memoria histórica</strong>,
            sino que también la proyecta hacia el futuro, fortaleciendo el
            sentido de pertenencia y orgullo nacional. La iniciativa se
            convierte así en un motor de cohesión social, educación y turismo
            cultural, posicionando a Nicaragua como un país que valora y celebra
            sus raíces mientras apuesta por la innovación digital.
          </p>
        </div>

        {/* --- 3. Grid Responsive para las 4 Tarjetas --- */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-10">
          {impactData.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Contenedor del Ícono */}
              <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-lg p-3">
                {item.icon}
              </div>
              {/* Contenido de Texto */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
