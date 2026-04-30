"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { cn } from "@/shared/lib/utils";
import type { Testimonial } from "@/types";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      aria-hidden
      className="flex h-12 w-12 lg:w-16 lg:h-16   shrink-0 items-center justify-center rounded-full bg-secondary "
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex flex-col gap-8 rounded-2xl bg-[#242424] p-4 lg:p-6">
      <p className=" text-white font-normal font-manrope text-base leading-6 ">
        {item.text}
      </p>
      <div className="flex items-center gap-3">
        <div></div>
        <Avatar name={item.name} image={item.image} />
        <div>
          <p className=" mb-0.5 text-sm font-semibold text-grey leading-5.5">
            {item.name}
          </p>
          <p className="text-sm leading-5.5 font-normal  text-[#CCCCCC]">
            {item.location}
          </p>
        </div>
      </div>
    </article>
  );
}

interface ColumnProps {
  items: Testimonial[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  hoveredRef: React.RefObject<boolean>;
}

function Column({
  items,
  speed = 50,
  reverse = false,
  className,
  hoveredRef,
}: ColumnProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfHRef = useRef(0);
  const [dragging, setDragging] = useState(false);
  const state = useRef({
    pos: 0,
    drag: false,
    dragStartY: 0,
    dragStartPos: 0,
    lastTime: 0,
    velocity: 0,
    lastDragY: 0,
    lastDragTime: 0,
  });
  const rafRef = useRef(0);

  const slides = [...items, ...items];

  const applyTransform = useCallback(
    (pos: number) => {
      const track = trackRef.current;
      const halfH = halfHRef.current;
      if (!track || !halfH) return;
      const y = reverse ? -(halfH - pos) : -pos;
      track.style.transform = `translate3d(0,${y}px,0)`;
    },
    [reverse],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    halfHRef.current = track.scrollHeight / 2;
    const ro = new ResizeObserver(() => {
      halfHRef.current = track.scrollHeight / 2;
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let lastTime = 0;

    const tick = (time: number) => {
      const s = state.current;
      const halfH = halfHRef.current;

      if (halfH && !hoveredRef.current && !s.drag) {
        if (lastTime) {
          const dt = Math.min(time - lastTime, 100);

          if (Math.abs(s.velocity) > 0.5) {
            const sign = reverse ? 1 : -1;
            s.pos =
              (((s.pos + (sign * s.velocity * dt) / 1000) % halfH) + halfH) %
              halfH;
            s.velocity *= Math.pow(0.92, dt / 16);
            if (Math.abs(s.velocity) <= 0.5) s.velocity = 0;
          } else {
            s.pos = (((s.pos + (speed * dt) / 1000) % halfH) + halfH) % halfH;
          }

          applyTransform(s.pos);
        }
      }

      lastTime = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse, hoveredRef, applyTransform]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      const s = state.current;
      s.drag = true;
      s.velocity = 0;
      s.dragStartY = e.clientY;
      s.dragStartPos = s.pos;
      s.lastDragY = e.clientY;
      s.lastDragTime = e.timeStamp;
      el.setPointerCapture(e.pointerId);
      setDragging(true);
    };

    const onMove = (e: PointerEvent) => {
      const s = state.current;
      if (!s.drag) return;
      const halfH = halfHRef.current;
      if (!halfH) return;

      const dt = e.timeStamp - s.lastDragTime;
      if (dt > 0) s.velocity = ((e.clientY - s.lastDragY) / dt) * 1000;
      s.lastDragY = e.clientY;
      s.lastDragTime = e.timeStamp;

      const dy = e.clientY - s.dragStartY;
      const delta = reverse ? dy : -dy;
      s.pos = (((s.dragStartPos + delta) % halfH) + halfH) % halfH;
      applyTransform(s.pos);
    };

    const onUp = () => {
      state.current.drag = false;
      setDragging(false);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [reverse, applyTransform]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "h-120 overflow-hidden scrollbar-none select-none touch-none",
        dragging ? "cursor-grabbing" : "cursor-grab",
        "mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]",
        className,
      )}
    >
      <div ref={trackRef} className="flex flex-col gap-4 will-change-transform">
        {slides.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

interface Props {
  items: Testimonial[];
}

export function TestimonialsCarousel({ items }: Props) {
  const hoveredRef = useRef(false);
  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
    >
      <Column items={items} hoveredRef={hoveredRef} className="sm:hidden" />
      <Column
        items={col1}
        hoveredRef={hoveredRef}
        className="hidden sm:block"
      />
      <Column
        items={col2}
        hoveredRef={hoveredRef}
        reverse
        className="hidden sm:block"
      />
      <Column
        items={col3}
        hoveredRef={hoveredRef}
        className="hidden lg:block"
      />
    </div>
  );
}
