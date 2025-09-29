import { useState } from "react";
import "../../styles/SiderCalendar.css";

export default function SiderRecordatorio() {
  const [open, setOpen] = useState(true); // controla si el menú está abierto

  return (
    <div className="sider-wrapper">
      {/* Botón de toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`sider-toggle ${open ? "open" : ""}`}
      >
        {open ? "⏪ Ocultar" : "🚨 Menú"}
      </button>

      {/* Sidebar */}
      <div className={`sider-panel ${open ? "open" : ""}`}>
        <h3>Opciones</h3>

        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
          <li>Opción 4</li>
        </ul>
      </div>
    </div>
  );
}
