import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/home";
import Quiz from "./components/retos/Quiz";
import Calendar from "./components/calendar/Calendario";
import Map from "./components/mapsR/MapsReact";
import Game from "./components/retos/MenuRetos";
import MemoryGames from "./components/retos/memorGames/MemoryGames";
import MapsReact from "./components/mapsR/MapsReact";
import { StorySubmissionPage } from "./components/story";
import { CulturalLibraryPage } from "./components/CulturalLibrary";
import { StoryDetailPage } from "./components/StoryDetailPage";

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
        <Route path="Calendario" element={<Calendar />} />
        <Route path="mapa" element={<MapsReact />} />
        <Route path="compartir-historia" element={<StorySubmissionPage />} />
        <Route path="biblioteca" element={<CulturalLibraryPage />} />
        <Route path="biblioteca/:storySlug" element={<StoryDetailPage />} />
      </Route>
    </Routes>
  );
}
