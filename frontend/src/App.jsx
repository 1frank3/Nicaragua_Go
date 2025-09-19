//import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        {/* <Calendario /> */}
        <div className="bg-green-600 text-white text-3xl p-10">
      Si ves esto en verde → Tailwind está funcionando 🚀
    </div>
      </BrowserRouter>
    </>
  );
}

export default App;
