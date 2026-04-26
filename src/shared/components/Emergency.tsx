import { Container } from "@/shared/layout/Container";

const textClass =
  "font-manrope font-semibold text-[18px] leading-[28px] uppercase text-white whitespace-nowrap";

function MarqueeItem() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 py-1.5">
      <div className="flex items-center gap-1.5">
        <span className="flex h-2 w-2 rounded-full bg-white" />
        <span className={textClass}>Emergency Service Available 8:00 – 17:00</span>
      </div>
      <span className={textClass}>
        DON&apos;T WAIT — WE CAN FIX IT TODAY!{" "}
        <a href="tel:+12345678900" className="hover:underline">
          +123 456 78 90
        </a>
      </span>
    </div>
  );
}

export function Emergency() {
  return (
    <div className="bg-dark py-1.5 shadow-[0px_4px_18px_0px_#7F7F7F40]">
      {/* Mobile: auto-scrolling marquee */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-marquee">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>

      {/* Desktop: side-by-side */}
      <Container className="hidden md:flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="flex h-2 w-2 rounded-full bg-white" />
          <span className={textClass}>
            Emergency Service Available 8:00 – 17:00
          </span>
        </div>
        <p className={textClass}>
          DON&apos;T WAIT — WE CAN FIX IT TODAY!{" "}
          <a href="tel:+12345678900" className="hover:underline">
            +123 456 78 90
          </a>
        </p>
      </Container>
    </div>
  );
}