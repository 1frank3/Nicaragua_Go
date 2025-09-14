import { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SidebarEventos from "../core/Sidebar";

const feriadosFijos = [
  { title: "Año Nuevo", date: "01-01" },
  { title: "Día de San Valentín", date: "02-14" },
  { title: "Día Internacional de la Mujer", date: "03-08" },
  { title: "Día del Trabajo", date: "05-01" },
  { title: "Día de la Madre", date: "05-30" },
  { title: "Día de la Independencia", date: "09-15" },
  { title: "Día de la Virgen de la Purísima", date: "12-07" },
  { title: "Inmaculada Concepción", date: "12-08" },
  { title: "Navidad", date: "12-25" },
];

export default function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [añoActual, setAñoActual] = useState(new Date().getFullYear());
  const [mesVisible, setMesVisible] = useState(new Date().getMonth());

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        // 1. api de feriados (eventos)(Nicaragua)
        const res = await axios.get(
          `https://date.nager.at/api/v3/PublicHolidays/${añoActual}/NI`
        );
        const feriadosMoviles = res.data.map((f) => ({
          title: f.localName,
          date: f.date,
        }));

        // manda a llamar los feriados fijos que existen en nicaragua
        const fijos = feriadosFijos.map((f) => ({
          title: f.title,
          date: `${añoActual}-${f.date}`,
        }));

        setEventos([...feriadosMoviles, ...fijos]);
      } catch (err) {
        console.error("Error cargando feriados:", err);
      }
    };

    fetchEventos();
  }, [añoActual]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Sidebar */}
      <SidebarEventos eventos={eventos} mesVisible={mesVisible} />

      {/* Calendario */}
      <div style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={eventos}
          height="75vh"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth",
          }}
          datesSet={(arg) => {
            const año = arg.start.getFullYear();
            const mesCentral = new Date(arg.start);
            mesCentral.setDate(mesCentral.getDate() + 15); //esto es para que  no muestre otro mes que no es el sidebar

            setAñoActual(año);
            setMesVisible(mesCentral.getMonth());
          }}
        />
      </div>
    </div>
  );
}
