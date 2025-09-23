import { Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import CardUbi from "./CardUbi";

//opciones a futura
//1-usar base de datos y poner manualamente alli  modificar
//2-base de datos pero poner un panel oculto y agregar lugares desde ahi(con contraseña)
//3-directamente un login solo para administrador
//4-usar array sin base de datos
export const lugares = [
  {
    id: 1,
    nombre: "Basilica Catedral de Leon",
    Descripcion: "Patrimonio de la Humanidad y simbolo Historico de Leon.",
    Imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-hpWWXWMg6ZR6_vIOxdQwcwyte5a6Ic_PvtpkFS9L_nFIJwwzyxtortir7WHvXl3x8E&usqp=CAU",
    coords: [12.434974, -86.878113],
  },
  {
    id: 2,
    nombre: "Museo Ortiz Gurdian",
    Descripcion:
      "Museo de arte moderno con una de las mejores colecciones en centro America",
    Imagen:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Museo_Ortiz_Gurdian.jpg",
    coords: [12.434775, -86.88161],
  },
];

export default function Ubicaciones({ selected }) {
  const map = useMap();
  const markerRefs = useRef({}); //guardar ubicacion de cada lugar

  useEffect(() => {
    if (selected && markerRefs.current[selected.id]) {
      const marker = markerRefs.current[selected.id];
      map.flyTo(selected.coords, 15); //mover cámara al lugar y tambien el zoom
      marker.openPopup(); //abrir popup automáticamente
    }
  }, [selected, map]);

  return (
    <>
      {lugares.map((lugar) => (
        <Marker
          key={lugar.id}
          position={lugar.coords}
          ref={(ref) => (markerRefs.current[lugar.id] = ref)}
        >
          <Popup>
            {/*aqui es donde va las cards de las ubicaciones */}
            <CardUbi lugar={lugar} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
