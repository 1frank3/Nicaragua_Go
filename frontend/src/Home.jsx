import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import NavBara from "./components/core/NavBara";
// import "./styles/Home.css";
// este home sera eliminado por completo
export default function Home() {
  return (
    <>
      <NavBara />
      <section>
        <div className="hero">
          <div className="izquierda">
            <h1>Bienvenido a Nuestro Sitio</h1>
            <p>Explora y conoce a Nicaragua como nunca</p>
          </div>

          <div className="derecha">
            <Image src={folclore} rounded fluid />
          </div>
        </div>
        <div>
          <div>
            <Button variant="outline-success">Comenzar</Button>
            <Button variant="outline-success">Mas informacion</Button>
          </div>
        </div>
      </section>
    </>
  );
}
