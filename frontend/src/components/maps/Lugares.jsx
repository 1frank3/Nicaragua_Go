import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { lugares } from "./Ubicaciones";

export default function Lugares({ onSelect }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu" style={{ display: "flex", gap: "20px" }}>
        {/* Botón hamburguesa */}
        <Button variant="dark" onClick={handleShow} className="m-1.5">
          ☰
        </Button>
        <div>
          <Offcanvas
            show={show}
            onHide={handleClose}
            backdrop={false}
            placement="start"
            style={{ backgroundColor: "#111", color: "white" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div style={{ marginBottom: "1rem" }}>
                <a href="#">HOME</a> | <a href="#">PUBLICAR</a> |{" "}
                <a href="#">JUEGO</a>
              </div>

              <h5>Lugares turísticos</h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {lugares.map((lugar) => (
                  <li key={lugar.id} style={{ marginBottom: "0.5rem" }}>
                    <Button
                      variant="outline-secondary"
                      onClick={() => onSelect(lugar)}
                      className="d-flex align-items-center w-100"
                    >
                      <MapPinIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "8px",
                        }}
                      />
                      {lugar.nombre}
                    </Button>
                  </li>
                ))}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
