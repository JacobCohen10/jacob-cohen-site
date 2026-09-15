"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { routeDays } from "@/components/bikeRouteData";

const allCoords: [number, number][] = routeDays.flatMap((d) => d.coords);
const start = allCoords[0];
const end = allCoords[allCoords.length - 1];

const lats = allCoords.map((c) => c[0]);
const lons = allCoords.map((c) => c[1]);
const bounds: [[number, number], [number, number]] = [
  [Math.min(...lats), Math.min(...lons)],
  [Math.max(...lats), Math.max(...lons)],
];

export default function BikeMap() {
  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [24, 24] }}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={allCoords} pathOptions={{ color: "#9D2235", weight: 4 }} />
      <CircleMarker
        center={start}
        radius={6}
        pathOptions={{ color: "#221D1C", fillColor: "#221D1C", fillOpacity: 1 }}
      >
        <Tooltip direction="top">Start — Fairfield, CT</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={end}
        radius={6}
        pathOptions={{ color: "#6E1826", fillColor: "#6E1826", fillOpacity: 1 }}
      >
        <Tooltip direction="top">Finish — Rutland, VT</Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
