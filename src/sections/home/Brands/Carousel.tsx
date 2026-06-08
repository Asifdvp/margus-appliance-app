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
    { loop: true, dragFree: true, align: "start", },
    [AutoScroll({ startDelay: 0, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: false, direction })]
  );

  const items = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="flex">
        {items.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="relative flex-none w-20 h-4 md:w-36 md:h-10 mr-4 lg:mr-8"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
              priority={priority}
            />
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
      <div className="flex flex-col gap-3 md:gap-6">
        <BrandRow brands={brands} direction="forward" priority />
      </div>
    </div>
  );
}
