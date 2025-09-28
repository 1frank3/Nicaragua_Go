//import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

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
