import { Marker, Popup } from "react-map-gl/mapbox";
import { useState } from "react";
import MapsCardUbi from "./MapsCardUbi";

export const departamentos = [
  {
    nombre: "Managua",
    lat: 12.136,
    lng: -86.251,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Catedral de leon",
    lat: 12.434974,
    lng: -86.878113,
    descripcion: "hola mundo",
    imagen: "https://i.ytimg.com/vi/iwzDF268HXQ/sddefault.jpg",
  },
  {
    nombre: "Granada",
    lat: 11.93,
    lng: -85.956,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Masaya",
    lat: 11.968,
    lng: -86.095,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Matagalpa",
    lat: 12.926,
    lng: -85.917,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Estelí",
    lat: 13.087,
    lng: -86.358,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Chinandega",
    lat: 12.626,
    lng: -87.132,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Jinotega",
    lat: 13.095,
    lng: -85.922,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Boaco",
    lat: 12.479,
    lng: -85.662,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Chontales",
    lat: 11.828,
    lng: -85.707,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Rivas",
    lat: 11.438,
    lng: -85.83,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Río San Juan",
    lat: 11.246,
    lng: -84.87,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Madriz",
    lat: 13.356,
    lng: -86.603,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Carazo",
    lat: 11.566,
    lng: -85.869,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Atlántico Norte",
    lat: 13.443,
    lng: -83.792,
    descripcion: "hola mundo",
    imagen: "",
  },
  {
    nombre: "Atlántico Sur",
    lat: 12.001,
    lng: -83.767,
    descripcion: "hola mundo",
    imagen: "",
  },
];

export default function MapsDepartamentos() {
  const [selected, setSelected] = useState(null);
  return departamentos.map((dep) => (
    <Marker
      key={dep.nombre}
      latitude={dep.lat}
      longitude={dep.lng}
      color="red"
      onClick={(e) => {
        e.originalEvent.stopPropagation(); //para que no se haga zoom al mapa al hacer click
        setSelected(dep); //no e descubieryto como haver zoom al precionar el marker
      }}
    >
      {selected?.nombre === dep.nombre && (
        <Popup
          latitude={dep.lat}
          longitude={dep.lng}
          anchor="top"
          onClose={() => setSelected(null)}
        >
          <MapsCardUbi
            nombre={dep.nombre}
            descripcion={dep.descripcion}
            imagen={dep.imagen}
          />
        </Popup>
      )}
    </Marker>
  ));
}
