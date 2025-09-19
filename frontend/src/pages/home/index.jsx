import backgroundImage from "../../assets/img/nicaragua-background.webp"
import  "../../styles/HomeP.css"
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
    <header className='main-header'>
        <nav className='main-nav'>
            <ul>
                <li>
                  <Link to ="/"  > 
                     Inicio
                  </Link> </li>

                <li> 
                    <Link to="reto/quiz">
                    Quiz
                    </Link>
                </li>
                <li> <a href="#">Publicar</a> </li>
                <li> <a href="#">Contactenos</a> </li>
            </ul>
        </nav>
      </header>

      <main className="hero-content">
        <h1>Preserva y comparte la memoria de Nicaragua</h1>
        <p className="subtitle">Memoria Viva</p>
        <button className="cta-button">Explorar memorias</button>
      </main>
    </div>
  );
}
