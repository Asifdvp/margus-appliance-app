"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SERVICE_AREAS, MAP_CENTER, MAP_ZOOM } from "@/content/service-areas";

export function ServiceAreaMap() {
  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      scrollWheelZoom={false}
      className="w-full h-full rounded-2xl"
      aria-label="Margus Appliance service area map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {SERVICE_AREAS.map((area) => (
        <CircleMarker
          key={area.name}
          center={area.coords}
          radius={8}
          pathOptions={{ color: "#5500CC", fillColor: "#5500CC", fillOpacity: 0.85, weight: 2 }}
        >
          <Tooltip direction="top" offset={[0, -8]} opacity={1}>
            <span className="font-manrope text-[13px] font-semibold">{area.name}</span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
