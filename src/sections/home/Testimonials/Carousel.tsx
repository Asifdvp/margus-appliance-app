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
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-600 text-xs font-bold text-white"
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-zinc-800 p-5">
      <p className="text-sm leading-relaxed text-zinc-200">{item.text}</p>
      <div className="flex items-center gap-3">
        <Avatar name={item.name} />
        <div>
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs text-zinc-400">{item.location}</p>
        </div>
      </div>
    </article>
  );
}

interface ColumnProps {
  items: Testimonial[];
  duration: string;
  className?: string;
}

function Column({ items, duration, className }: ColumnProps) {
  const slides = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <div
        className="animate-marquee-y group-hover:[animation-play-state:paused] flex flex-col gap-4"
        style={{ animationDuration: duration }}
      >
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
  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <div className="group grid grid-cols-1 gap-4 h-120 sm:grid-cols-2 lg:grid-cols-3">
      {/* mobile only — all items in one column */}
      <Column items={items} duration="36s" className="sm:hidden" />
      {/* tablet + desktop */}
      <Column items={col1} duration="22s" className="hidden sm:block" />
      <Column items={col2} duration="28s" className="hidden sm:block" />
      {/* desktop only */}
      <Column items={col3} duration="25s" className="hidden lg:block" />
    </div>
  );
}
