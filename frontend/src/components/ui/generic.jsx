import { Link } from "react-router-dom";

// Componente para el botón de agregar 
export default function ButtonGeneric() {
    return (
        <Link to="/" className="fa-solid fa-plus ms-2">
            {/* + Nuevo Estudiante */}
            Volver al inicio
        </Link>
    );
}