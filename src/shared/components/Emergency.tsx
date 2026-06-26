import { Container } from "@/shared/layout/Container";

const textClass =
  "font-manrope font-semibold text-[12px] leading-[18px] md:text-[18px] md:leading-[28px] uppercase text-white whitespace-nowrap overflow-hidden";

function MarqueeItem() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 py-1.5">
      <div className="flex items-center gap-1.5">
        <span className="flex h-2 w-2 rounded-full bg-white" />
        <span className={textClass}>Emergency Service Available 8am – 6pm</span>
      </div>
      <span className={textClass}>
        DON&apos;T WAIT — WE CAN FIX IT TODAY!{" "}
        <a href="tel:+12163040665" className="hover:underline">
          (216) 304-0665
        </a>
      </span>
    </div>
  );
}

export function Emergency() {
  return (
    <div className="bg-dark py-1 shadow-[0px_4px_18px_0px_#7F7F7F40]">
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
            Emergency Service Available 8am – 6pm
          </span>
        </div>
        <p className={textClass}>
          DON&apos;T WAIT — WE CAN FIX IT TODAY!{" "}
          <a href="tel:+12163040665" className="hover:underline">
            (216) 304-0665
          </a>
        </p>
      </Container>
    </div>
  );
}
