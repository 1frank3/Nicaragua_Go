import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import MapsDepartamentos from "./MapsDepartamentos";
import SidebarMaps from "./SidebarMaps";

export default function MapsReact() {
  // Estado para el estilo del mapa (capa base)
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/assassind/cmg1gqijo003y01s6hjre4deb"
  );

  const [ubicacionActual, setUbicacionActual] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUbicacionActual({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SidebarMaps setMapStyle={setMapStyle} />

      {/* Contenedor del mapa */}
      <div style={{ flex: 1, position: "relative" }}>
        {/* 🔘 Selector de capas base */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        ></div>

        {/* Mapa */}
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: ubicacionActual ? ubicacionActual.lon : -86.8815,
            latitude: ubicacionActual ? ubicacionActual.lat : 12.4344,
            zoom: 8,
          }}
          style={{ width: "100%", height: "100vh" }}
          mapStyle={mapStyle} // 👈 capa base dinámica
        >
          {ubicacionActual && (
            <Marker
              longitude={ubicacionActual.lon}
              latitude={ubicacionActual.lat}
              color="blue"
            />
          )}
          {/* Capa de departamentos */}
          <MapsDepartamentos />
        </Map>
      </div>
    </div>
  );
}
