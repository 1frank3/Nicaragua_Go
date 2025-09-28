import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/home";
//import Quiz from "./components/retos/Quiz";
import Maps from "./components/maps/Maps"; // no funciona con llaves
import Quiz from "./components/retos/Quiz";
import Calendar from "./components/calendar/Calendario";
import MapsReact from "./components/mapsR/MapsReact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="mapa" element={<Maps />} />
        <Route path="MapsReact" element={<MapsReact />} />
      </Route>
    </Routes>
  );
}
