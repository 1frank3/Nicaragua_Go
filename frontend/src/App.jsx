import "./App.css"; //hay que modificar o eliminar por que afecta algunas cosas (se puede dejar los h1 y button)
//import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

//import Calendario from "./components/calendar/Calendario";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        {/* <Calendario /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
