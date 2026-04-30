"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import type { RecentJob } from "@/types";

interface RowProps {
  brands: RecentJob[];
  direction?: "forward" | "backward";
  priority?: boolean;
}

function BrandRow({ brands, direction = "forward", priority = false }: RowProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ startDelay: 0, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: false, direction })]
  );

  const items = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="flex gap-4 lg:gap-8">
        {items.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex-none w-51 h-35 lg:w-[320px] lg:h-55 rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={brand.image}
                alt={brand.alt}
                fill
                className="object-contain"
                priority={priority}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Props {
  brands: RecentJob[];
  className?: string;
}

export function RecentJobsCarousel ({ brands, className }: Props) {
  return (
    <div className={`overflow-hidden min-w-0${className ? ` ${className}` : ""}`}>
      <div className="flex flex-col gap-3">
        <BrandRow brands={brands} direction="forward" priority />
      </div>
    </div>
  );
}
