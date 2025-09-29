//import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { PuntuacionProvider } from "./context/PuntuacionContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <PuntuacionProvider>
          <Router />
        </PuntuacionProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
