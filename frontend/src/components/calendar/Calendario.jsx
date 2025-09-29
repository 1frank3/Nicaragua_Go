import { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import SiderCalendaar from "./SiderCalendaar";

// Sidebar de recordatorios que lista los eventos
function SiderRecordatorio({ eventos }) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
      <h3 className="font-bold mb-2">Recordatorios</h3>
      {eventos.length === 0 ? (
        <p className="text-gray-500 text-sm">No hay eventos</p>
      ) : (
        <ul className="space-y-1 max-h-64 overflow-y-auto">
          {eventos.map((ev, index) => (
            <li key={index} className="text-gray-700 text-sm">
              {ev.title} ({ev.start || ev.date})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const feriadosFijos = [
  { title: "Año Nuevo", date: "01-01", departamento: "Nicaragua" },
  { title: "Día de San Valentín", date: "02-14", departamento: "Nicaragua" },
  {
    title: "Día Internacional de la Mujer",
    date: "03-08",
    departamento: "Nicaragua",
  },
  { title: "Día del Trabajo", date: "05-01", departamento: "Nicaragua" },
  { title: "Día de la Madre", date: "05-30", departamento: "Nicaragua" },
  {
    title: "Día de la Independencia",
    date: "09-15",
    departamento: "Nicaragua",
  },
  {
    title: "Día de la Virgen de la Purísima",
    date: "12-07",
    departamento: "Nicaragua",
  },
  { title: "Inmaculada Concepción", date: "12-08", departamento: "Nicaragua" },
  { title: "Navidad", date: "12-25", departamento: "Nicaragua" },
];

export default function Calendario() {
  const [eventos, setEventos] = useState([]);
  const [añoActual, setAñoActual] = useState(new Date().getFullYear());
  const [mesVisible, setMesVisible] = useState(new Date().getMonth());

  // Estados para el modal
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tituloEvento, setTituloEvento] = useState("");
  const [infoSeleccion, setInfoSeleccion] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const res = await axios.get(
          `https://date.nager.at/api/v3/PublicHolidays/${añoActual}/NI`
        );

        const feriadosMoviles = res.data.map((f) => ({
          departamento: f.localNameD,
          title: f.localName,
          date: f.date,
        }));

        const fijos = feriadosFijos.map((f) => ({
          departamento: f.departamento,
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

  const handleDateSelect = (selectInfo) => {
    setModalAbierto(true);
    setInfoSeleccion(selectInfo);
  };

  const handleCerrarModal = () => {
    setModalAbierto(false);
    setTituloEvento("");
    setInfoSeleccion(null);
  };

  const handleGuardarEvento = () => {
    if (tituloEvento && infoSeleccion) {
      const calendarApi = infoSeleccion.view.calendar;
      calendarApi.unselect();

      setEventos((prev) => [
        ...prev,
        {
          title: tituloEvento,
          start: infoSeleccion.startStr,
          end: infoSeleccion.endStr,
          allDay: infoSeleccion.allDay,
        },
      ]);

      handleCerrarModal();
    }
  };

  return (
    <div className="relative flex gap-5">
      {/* Sidebar */}
      <div className="m-1">
        <div className="mb-20">
          <SiderCalendaar eventos={eventos} mesVisible={mesVisible} />
        </div>
        <div>
          <SiderRecordatorio eventos={eventos} />
        </div>
      </div>

      {/* Calendario */}
      <div className="flex-1 m-2 ml-16">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={eventos}
          selectable={true}
          select={handleDateSelect}
          height="75vh"
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end: "dayGridMonth",
          }}
          datesSet={(arg) => {
            const año = arg.start.getFullYear();
            const mesCentral = new Date(arg.start);
            mesCentral.setDate(mesCentral.getDate() + 15);
            setAñoActual(año);
            setMesVisible(mesCentral.getMonth());
          }}
        />
      </div>

      {/* Modal */}
      {modalAbierto && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleCerrarModal}
          ></div>

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl p-6 z-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Añadir Nuevo Evento
            </h3>
            <input
              type="text"
              autoFocus
              value={tituloEvento}
              onChange={(e) => setTituloEvento(e.target.value)}
              placeholder="Título del Evento"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCerrarModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardarEvento}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Guardar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
