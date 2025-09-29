import { useMemo, useState } from "react";
import "../../styles/SiderCalendar.css"; // Importamos el CSS externo

export default function SiderCalendaar({ eventos, mesVisible }) {
  const [open, setOpen] = useState(true); // controla si el sidebar está abierto o cerrado

  // Filtramos eventos del mes actual
  const eventosMes = useMemo(() => {
    return eventos.filter((ev) => {
      const fecha = new Date(ev.date);
      return fecha.getMonth() === mesVisible;
    });
  }, [eventos, mesVisible]);

  return (
    <div className="sider-wrapper">
      {/* Botón de toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`sider-toggle ${open ? "open" : ""}`}
      >
        {open ? "⏪ Ocultar" : "📅 Eventos"}
      </button>

      {/* Sidebar */}
      <div className={`sider-panel ${open ? "open" : ""}`}>
        <h3>Eventos del Mes</h3>

        {eventosMes.length === 0 ? (
          <p className="sider-empty">No hay eventos este mes</p>
        ) : (
          <ul>
            {eventosMes.map((ev, i) => (
              <li key={i}>
                <strong>{ev.title}</strong>
                <br />
                <small>
                  📅 {new Date(ev.date).toLocaleDateString("es-NI")}
                </small>
                {ev.departamento && (
                  <div className="sider-dep">📍 {ev.departamento}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
