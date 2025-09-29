import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/home";
import Quiz from "./components/retos/Quiz";
import Calendar from "./components/calendar/Calendario";
import Map from "./components/mapsR/MapsReact";
import Game from "./components/retos/MenuRetos";
import MemoryGames from "./components/retos/memorGames/MemoryGames";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Map" element={<Map />} />
        <Route path="Game" element={<Game />} />
        <Route path="MemoryGames" element={<MemoryGames />} />
      </Route>
    </Routes>
  );
}
