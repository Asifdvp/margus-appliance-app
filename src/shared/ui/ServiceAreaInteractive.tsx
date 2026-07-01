"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_AREAS } from "@/content/service-areas";
import type { ServiceArea } from "@/content/service-areas";
import { ServiceAreaMapDynamic } from "@/shared/ui/ServiceAreaMapDynamic";
import LocationPinIcon from "@/shared/icons/point.svg";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { cn } from "@/shared/lib/utils";

interface Props {
  areas?: ServiceArea[];
  showViewAll?: boolean;
}

export function ServiceAreaInteractive({ areas = SERVICE_AREAS, showViewAll = false }: Props) {
  const [flyTo, setFlyTo] = useState<[number, number] | null>(null);
  const [activeArea, setActiveArea] = useState<string | null>(null);

  function handleAreaClick(name: string, coords: [number, number]) {
    setActiveArea(name);
    setFlyTo(coords);
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
      {/* City grid */}
      <div className="flex flex-wrap gap-2 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:max-h-203.5 lg:overflow-y-auto scrollbar-none">
        {areas.map((area) => (
          <button
            key={area.name}
            onClick={() => handleAreaClick(area.name, area.coords)}
            className={cn(
              "flex items-center gap-2 rounded-xl p-3 lg:px-4 lg:py-4 lg:gap-2 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              activeArea === area.name
                ? "bg-brand text-white"
                : "bg-[#F6F6F6] text-dark hover:bg-brand/10"
            )}
          >
            <LocationPinIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" />
            <span className="font-manrope text-[14px] font-semibold leading-5.5">
              {area.name}
            </span>
          </button>
        ))}

        {showViewAll && (
          <Link
            href="/service-areas"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand p-3 lg:px-4 lg:py-4 font-manrope text-[14px] font-semibold leading-5.5 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            See all
            <ArrowIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Map */}
      <div className="isolate h-97.5 lg:h-full lg:max-h-160 rounded-3xl overflow-hidden shadow-sm">
        <ServiceAreaMapDynamic flyTo={flyTo} areas={areas} />
      </div>
    </div>
  );
}
