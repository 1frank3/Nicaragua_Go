export default function SidebarEventos({ eventos, mesVisible }) {
  const eventosMes = eventos.filter(
    (e) => new Date(e.date).getMonth() === mesVisible
  );

  const nombreMes = new Date(2025, mesVisible, 1).toLocaleString("es-ES", {
    month: "long",
  });

  return (
    <aside
      style={{
        width: "250px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        height: "75vh",
        overflowY: "auto",
      }}
    >
      <h3>Eventos en {nombreMes}</h3>
      {eventosMes.length === 0 && <p>No hay eventos</p>}
      <ul>
        {eventosMes.map((ev, i) => (
          <li key={i}>
            {new Date(ev.date).getDate()} - {ev.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
