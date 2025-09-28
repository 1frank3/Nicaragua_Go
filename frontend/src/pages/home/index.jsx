import cultura from "../../assets/img/culturanic.webp"
import granada from "../../assets/img/granada.webp";
import leon from "../../assets/img/catedral_leon.jpg";
import managua from "../../assets/img/managua.webp"
import { Card } from "../../components/core/card";


export function HomePage() {
  return (
    <div className="container">
     
      <div className="space-y-4">
      <Card
        title="Catedral de León"
        subtitle="León"
        src={leon}
        alt="Catedral de León, Nicaragua"
      />
      <Card
        title="Catedral de Granada"
        subtitle="Granada"
        src={granada}
        alt="Catedral de Granada, Nicaragua"
      />


    </div>
      <h1>Impacto Cultural de Nicargua Go</h1> <br/>
      <p>
        Memoria Viva de Nicaragua trasciende la simple digitalización, creando
        un impacto profundo y duradero en la identidad y el tejido social de la
        nación. Al conectar el pasado con el presente, la plataforma fomenta una
        comprensión más rica y una apreciación más profunda de la herencia
        nicaragüense.
      </p> <br/>

      <div>
        <h2>Conexión Intergeneracional</h2> <br/>
        <p>
          Facilita que abuelos y nietos compartan historias y recuerdos,
          fortaleciendo los lazos familiares y transmitiendo el conocimiento de
          una generación a otra.
        </p> <br/>
      </div>

      <div>
        <h2>Recurso Educativo Vital</h2> <br/>
        <p>
          Ofrece a estudiantes, investigadores y al público en general una
          fuente inigualable de material histórico y cultural auténtico para el
          aprendizaje.
        </p> <br/>
      </div>

      <div className="fto-cultura">
        <img src={cultura} alt="" /> <br />
      </div>
    </div>
  );
}
