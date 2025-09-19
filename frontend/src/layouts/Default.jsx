import { Outlet } from "react-router-dom";
import { Footer } from "../components/core/footer";
import { Header } from "../components/core/Header";

export function DefaultLayout() {
  return (
    <div>
      {/* <Header />  */}
      <main className="py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
