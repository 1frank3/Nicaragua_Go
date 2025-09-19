import { Button, Card } from "react-bootstrap";

export default function CardUbi({ lugar }) {
  const handleRuta = () => {
    const [lat, lng] = lugar.coords;
    //google para rutas despues quitare este si
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    );
  };
  return (
    <>
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
    </>
  );
}
