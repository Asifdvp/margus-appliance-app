"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_AREAS } from "@/content/service-areas";
import type { ServiceArea } from "@/content/service-areas";
import { SERVICE_AREA_HIGHLIGHTS } from "@/content/service-area-highlights";
import { ServiceAreaMapDynamic } from "@/shared/ui/ServiceAreaMapDynamic";
import LocationPinIcon from "@/shared/icons/point.svg";
import ArrowIcon from "@/shared/icons/right-arrow.svg";
import { cn } from "@/shared/lib/utils";

// Cities with an authored /service-areas/{slug} page — the rest have no
// page to link to, so they stay map-only (button, no href).
const CITY_SLUGS: Record<string, string> = Object.fromEntries(
  SERVICE_AREA_HIGHLIGHTS.map((c) => [c.name, c.slug])
);

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
        {areas.map((area) => {
          const slug = CITY_SLUGS[area.name];
          const itemClassName = cn(
            "flex items-center gap-2 rounded-xl p-3 lg:px-4 lg:py-4 lg:gap-2 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
            activeArea === area.name
              ? "bg-brand text-white"
              : "bg-[#F6F6F6] text-dark hover:bg-brand/10"
          );
          const content = (
            <>
              <LocationPinIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" />
              <span className="font-manrope text-[14px] font-semibold leading-5.5">
                {area.name}
              </span>
            </>
          );

          // Cities with a real page: a genuine <a href> (crawlable, and a
          // real navigation for keyboard/no-JS users) that intercepts a
          // plain click to animate the map instead, same as before.
          if (slug) {
            return (
              <Link
                key={area.name}
                href={`/service-areas/${slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleAreaClick(area.name, area.coords);
                }}
                className={itemClassName}
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={area.name}
              onClick={() => handleAreaClick(area.name, area.coords)}
              className={itemClassName}
            >
              {content}
            </button>
          );
        })}

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
