import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import logo from "../../assets/img/logo.png"

export  function Header() {
  return (
    <header className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
       
        <div className="flex items-center gap-3">
          <img src={logo} alt="Memoria Viva Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">
            Memoria <span className="text-pink-500">Viva</span>{" "}
            <span className="text-blue-300">Nicaragua</span>
          </h1>
        </div>

      
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/mapa" className="hover:text-yellow-400 transition">
                Mapa
              </Link>
            </li>
            <li>
              <Link to="/quiz" className="hover:text-yellow-400 transition">
                Quiz
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-yellow-400 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
