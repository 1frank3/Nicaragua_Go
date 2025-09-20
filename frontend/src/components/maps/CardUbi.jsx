import { Button, Card } from "react-bootstrap";
import "tailwindcss";

export default function CardUbi({ lugar }) {
  const handleRuta = () => {
    const [lat, lng] = lugar.coords;
    //google para rutas despues quitare este si
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    );
  };
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={lugar.Imagen} alt={lugar.nombre} />
        <Card.Body>
          <Card.Title>{lugar.nombre}</Card.Title>
          <Card.Text>{lugar.Descripcion}</Card.Text>
          <Button variant="primary" onClick={handleRuta}>
            Ruta
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
