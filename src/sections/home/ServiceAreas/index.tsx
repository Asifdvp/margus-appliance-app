import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { ServiceAreaInteractive } from "@/shared/ui/ServiceAreaInteractive";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";

export function ServiceAreas() {
  return (
    <section
      className="pt-13 lg:pt-24 bg-white"
      aria-labelledby="service-areas-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-12">
          <h2
            id="service-areas-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[48px] lg:leading-14"
          >
            Appliance Repair Service Areas Near Cleveland
          </h2>
          <div>
            <p className="font-manrope text-[12px] leading-4.5 text-secondary md:text-[18px] md:leading-7 md:mb-4">
              We serve Parma, Cleveland, and surrounding cities, providing fast
              and reliable repair for refrigerators, washers, dryers, and other
              household appliances, helping keep your home running smoothly
              without interruptions.
            </p>
            <Link
              href="/service-areas"
              className="w-full rounded-xl bg-brand px-4 py-2.5 text-[15px] lg:text-[18px] lg:leading-7 font-semibold text-white hover:bg-brand/90 hidden lg:flex items-center justify-center gap-1"
            >
              Learn More <RightArrowIcon />
            </Link>
          </div>
        </div>

        <ServiceAreaInteractive />
      </Container>
    </section>
  );
}
