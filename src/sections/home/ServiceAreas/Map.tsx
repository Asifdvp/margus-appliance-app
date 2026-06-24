"use client";

import { useEffect } from "react";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PointIcon from "@/shared/icons/point.svg";
import { SERVICE_AREAS, MAP_CENTER, MAP_ZOOM } from "@/content/service-areas";
import type { ServiceArea } from "@/content/service-areas";

const markerIcon = L.divIcon({
  html: renderToStaticMarkup(<PointIcon style={{ width: 24, height: 24 }} />),
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  tooltipAnchor: [0, -24],
});

function FlyToController({ coords }: { coords: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 13, { duration: 1 });
  }, [coords, map]);
  return null;
}

interface Props {
  flyTo?: [number, number] | null;
  areas?: ServiceArea[];
}

export function ServiceAreaMap({ flyTo = null, areas = SERVICE_AREAS }: Props) {
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
      <FlyToController coords={flyTo} />
      {areas.map((area) => (
        <Marker key={area.name} position={area.coords} icon={markerIcon}>
          <Tooltip direction="top" offset={[0, -8]} opacity={1}>
            <span className="font-manrope text-[13px] font-semibold">{area.name}</span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
