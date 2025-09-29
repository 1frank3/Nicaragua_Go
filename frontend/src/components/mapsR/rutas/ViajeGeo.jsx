import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
//import polyline from "@mapbox/polyline";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "TU_MAPBOX_ACCESS_TOKEN";

export default function Ruta() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [13.426579, 52.508068],
      zoom: 15,
    });

    const getRoute = async () => {
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/13.426579,52.508068;13.427292,52.506902?steps=true&geometries=polyline&access_token=${mapboxgl.accessToken}`;

      const res = await fetch(url);
      const data = await res.json();

      const route = data.routes[0].geometry;
      const coordinates = polyline
        .decode(route)
        .map(([lat, lng]) => [lng, lat]);

      map.current.on("load", () => {
        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coordinates,
            },
          },
        });

        map.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3b82f6",
            "line-width": 5,
          },
        });

        new mapboxgl.Marker({ color: "green" })
          .setLngLat([13.426579, 52.508068])
          .addTo(map.current);

        new mapboxgl.Marker({ color: "red" })
          .setLngLat([13.427292, 52.506902])
          .addTo(map.current);
      });
    };

    getRoute();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold">Ruta con Mapbox Directions</h2>
      <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
