"use client";

import { useState } from "react";
import { SERVICE_AREAS } from "@/content/service-areas";
import { ServiceAreaMapDynamic } from "@/shared/ui/ServiceAreaMapDynamic";
import LocationPinIcon from "@/shared/icons/point.svg";
import { cn } from "@/shared/lib/utils";

export function ServiceAreaInteractive() {
  const [flyTo, setFlyTo] = useState<[number, number] | null>(null);
  const [activeArea, setActiveArea] = useState<string | null>(null);

  function handleAreaClick(name: string, coords: [number, number]) {
    setActiveArea(name);
    setFlyTo(coords);
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
      {/* City grid */}
      <div className="flex flex-wrap gap-2 md:grid md:grid-cols-3 lg:grid-cols-2 md:gap-6">
        {SERVICE_AREAS.map((area) => (
          <button
            key={area.name}
            onClick={() => handleAreaClick(area.name, area.coords)}
            className={cn(
              "flex items-center gap-2 rounded-xl p-3 lg:px-6 lg:py-5 lg:gap-1.5 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              activeArea === area.name
                ? "bg-brand text-white"
                : "bg-[#F6F6F6] text-dark hover:bg-brand/10"
            )}
          >
            <LocationPinIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" />
            <span className="font-manrope text-[14px] font-semibold leading-5.5 lg:text-[18px] lg:leading-7">
              {area.name}
            </span>
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="isolate h-97.5 lg:h-full rounded-3xl overflow-hidden shadow-sm">
        <ServiceAreaMapDynamic flyTo={flyTo} />
      </div>
    </div>
  );
}
