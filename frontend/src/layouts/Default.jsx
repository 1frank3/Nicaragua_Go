import   "../styles/layouts/default.css"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/core/footer";
import { Header } from "../components/core/Header";

export function DefaultLayout() {
  return (
    <div className="default-layout">
       <Header />  
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
