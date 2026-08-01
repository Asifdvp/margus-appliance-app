"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/shared/lib/utils";

type Props = {
  images: string[];
  alt: string;
  mainClassName?: string;
  sizes?: string;
};

export function JobGallery({ images, alt, mainClassName, sizes = "100vw" }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbApi?.scrollTo(index);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    mainApi.on("select", onSelect).on("reInit", onSelect);
  }, [mainApi, onSelect]);

  if (images.length === 0) return null;

  return (
    <div>
      <div className={cn("overflow-hidden", mainClassName)} ref={mainRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={src} className="relative flex-none w-full h-full">
              <Image
                src={src}
                alt={i === 0 ? alt : `${alt} — photo ${i + 1}`}
                fill
                sizes={sizes}
                priority={i === 0}
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="overflow-hidden mt-2" ref={thumbRef}>
          <div className="flex gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onThumbClick(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === selectedIndex}
                className={cn(
                  "relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                  i === selectedIndex ? "border-brand" : "border-transparent"
                )}
              >
                <Image src={src} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
