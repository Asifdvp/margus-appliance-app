"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import type { Brand } from "@/types";

interface RowProps {
  brands: Brand[];
  direction?: "forward" | "backward";
  priority?: boolean;
}

function BrandRow({ brands, direction = "forward", priority = false }: RowProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ startDelay: 0, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true, direction })]
  );

  const items = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="flex gap-3">
        {items.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex-none w-[65px] h-[32px] lg:w-[120px] lg:h-[64px] border rounded-[8px] bg-[#F6F6F6] flex items-center justify-center"
          >
            <div className="relative w-3/4 h-3/4">
              <Image
                src={brand.logo}
                alt={brand.name}
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
  brands: Brand[];
  className?: string;
}

export function BrandsCarousel({ brands, className }: Props) {
  return (
    <div className={`overflow-hidden min-w-0${className ? ` ${className}` : ""}`}>
      <div className="flex flex-col gap-3">
        <BrandRow brands={brands} direction="forward" priority />
        <BrandRow brands={brands} direction="backward" />
      </div>
    </div>
  );
}
