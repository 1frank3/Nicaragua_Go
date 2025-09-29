import { useState } from "react";
import { Link } from "react-router-dom";

{
  /*poner dentro de unm array las opciines y disminuir lineas de codigo */
}
export default function SidebarMaps({ setMapStyle }) {
  const [openDepartamentos, setOpenDepartamentos] = useState(false);
  const [openCapa, setOpenCapa] = useState(false);

  const capa = [
    {
      nombre: "Streets",
      style: "mapbox://styles/assassind/cmg1gqijo003y01s6hjre4deb",
    },
    {
      nombre: "Satellite",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
    },
    { nombre: "Dark", style: "mapbox://styles/mapbox/dark-v11" },
  ];

  return (
    <div className="fixed top-25 left-1 z-50">
      {/* Botones */}
      <div className="text-center space-x-1">
        <button
          onClick={() => setOpenDepartamentos(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
          dark:focus:ring-blue-800"
        >
          Mapa
        </button>

        <button
          onClick={() => setOpenCapa(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
          dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
          dark:focus:ring-blue-800"
        >
          Vista
        </button>
      </div>

      {/* Sidebar Departamentos */}
      <div
        className={`fixed top-0 left-0 z-40 w-40 sm:w-48 md:w-56 h-screen p-4 overflow-y-auto 
        transition-transform bg-white dark:bg-gray-800 
        ${openDepartamentos ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Departamentos
        </h5>
        <button
          onClick={() => setOpenDepartamentos(false)}
          className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent 
          hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 
          dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✕
        </button>

        <ul className="mt-6 space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              León
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Managua
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Chinandega
            </a>
          </li>
          {/* más departamentos */}
        </ul>
      </div>

      {/* Sidebar Capa*/}
      <div
        className={`fixed top-0 left-0 z-50 w-40 sm:w-48 md:w-56 h-screen p-4 overflow-y-auto 
        transition-transform bg-white dark:bg-gray-800 
        ${openCapa ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Vista
        </h5>
        <button
          onClick={() => setOpenCapa(false)}
          className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent 
          hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 
          dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✕
        </button>

        <ul className="mt-6 space-y-2 font-medium">
          {capa.map((c) => (
            <li key={c.nombre}>
              <button
                onClick={() => setMapStyle(c.style)}
                className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {c.nombre}
              </button>
            </li>
          ))}
          {/* más departamentos */}
        </ul>
      </div>
    </div>
  );
}
