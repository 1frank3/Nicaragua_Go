import Quizimg from "../../assets/img/Quizimg.jpg";
import Proximamente from "../../assets/img/proximamente.jpg";
import Puntuacion from "./Puntuacion";
import MemoryGames from "../../assets/img/menuMemorGAme.png";
//import { usePuntuacion } from "../../context/PuntuacionContext"; // 👈 usar contexto

export default function MenuRetos() {
  //const { puntos, sumar, restar, reiniciar } = usePuntuacion(); // 👈 ya no useState local

  const juegos = [
    { nombre: "Quiz", imagen: Quizimg, url: "/Quiz" },
    { nombre: "Memory Game", imagen: MemoryGames, url: "/MemoryGames" },

    { nombre: "Mini Puzzle", imagen: Proximamente, url: "#" },
    { nombre: "Ahorcado", imagen: Proximamente, url: "#" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 ">
      <div className="absolute top-20 right-6">
        <Puntuacion /> {/* 👈 ahora muestra el global */}
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-lg w-full">
        {juegos.map((juego, index) => (
          <a
            key={index}
            href={juego.url}
            className="relative group cursor-pointer block"
          >
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg transition-transform duration-100 group-hover:scale-102">
              {juego.nombre}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
