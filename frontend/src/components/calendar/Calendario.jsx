import NavBara from "../core/NavBara";
import interactionPlugin from "@fullcalendar/interaction";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendario() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <>
      <NavBara />
      <div className="container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: "event 1", date: "2019-04-01" },
            { title: "Dia mundial del gamer", date: "2025-09-09" },
          ]}
        />
      </div>
    </>
  );
}
