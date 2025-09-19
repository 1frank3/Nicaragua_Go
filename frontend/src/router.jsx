import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/home";
//import Quiz from "./components/retos/Quiz";
import Maps from "./components/maps/Maps"; // no funciona con llaves
//desconozco la razon pero al agregar otra ruta se achica todo
//posdata ma que esta agregada no afecta en nada solo si son 2 rutas
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        {/*   <Route path="Quiz" element={<Quiz />} />   */}

        <Route path="mapa" element={<Maps />} />
      </Route>
    </Routes>
  );
}
