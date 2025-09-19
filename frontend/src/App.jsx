import "./App.css"; //hay que modificar o eliminar por que afecta algunas cosas (se puede dejar los h1 y button)
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
