import { usePuntuacion } from "../../context/PuntuacionContext";
import { AiTwotoneTrophy } from "react-icons/ai";
export default function Puntuacion() {
  const { puntos } = usePuntuacion();

  return (
    <div className="fixed top-25 right-5 bg-white shadow-lg rounded-lg p-4 text-center z-50">
      <h3 className="text-xl font-bold">
        <AiTwotoneTrophy />
      </h3>
      <p className="text-2xl">{puntos}</p>
    </div>
  );
}
