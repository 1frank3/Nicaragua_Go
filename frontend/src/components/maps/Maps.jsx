import "leaflet/dist/leaflet.css"; //es para el mapa
import {
  MapContainer,
  TileLayer,
  Polyline,
  LayersControl,
} from "react-leaflet";
const { BaseLayer } = LayersControl;
import Ubicaciones from "./Ubicaciones";

export default function Maps() {
  const nicaraguaPosition = [12.434420712218046, -86.88158256477332]; //12.865416, -85.207229 toda nicaragua
  //es prueba para marcar todo el territorio de nicaragua
  const polyline = [
    [12.45, -86.89],
    [12.445, -86.86],
    [12.43, -86.855],
    [12.42, -86.87],
    [12.43, -86.89],
    [12.45, -86.89],
  ];
  const limeOptions = { color: "blue" }; //color de la marca
  return (
    <>
      <MapContainer
        center={nicaraguaPosition}
        zoom={14} //para detallar las nicaragua es 7
        scrollWheelZoom={false}
        style={{ height: "45rem", width: "100%" }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="normal">
            {/*seleccionado predeterminado */}
            <TileLayer
              url="https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}.png?apiKey=c62199f8ea074388bf0514dcb8335ea4"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">MEMORIA VIVA NICARAGUA</a> assassind'
            />
          </BaseLayer>
          <BaseLayer name="Satélite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles © Esri"
            />
          </BaseLayer>
        </LayersControl>
        <Ubicaciones /> {/*componete de ubicaciones o marcas turisticas */}
        <Polyline pathOptions={limeOptions} positions={polyline} />
      </MapContainer>
    </>
  );
}
