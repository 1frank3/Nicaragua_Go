import { Marker, Popup } from "react-leaflet";
import CardUbi from "./CardUbi";

//opciones a futura
//1-usar base de datos y poner manualamente alli  modificar
//2-base de datos pero poner un panel oculto y agregar lugares desde ahi(con contraseña)
//3-directamente un login solo para administrador
//4-usar array sin base de datos
const lugares = [
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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitcentroamerica.com%2Fsala-prensa%2Fbanco-fotografico%2Fattachment%2Fgaleria-sala-prensa-visit-centroamerica-nicaragua-catedral-leon%2F&psig=AOvVaw3IKg2PYmp30aL6v2GisnY-&ust=1758249337854000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCYma-j4Y8DFQAAAAAdAAAAABAK",
    coords: [12.434775, -86.88161],
  },
];

export default function Ubicaciones() {
  return (
    <>
      {lugares.map((lugar) => (
        <Marker key={lugar.id} position={lugar.coords}>
          <Popup>
            {/*aqui es donde va las cards de las ubicaciones */}
            <CardUbi lugar={lugar} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}
