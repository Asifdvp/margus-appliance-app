import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { ServicesGrid } from "@/shared/ui/ServicesGrid";
import ArrowIcon from "@/shared/icons/right-arrow.svg";


const CTA_LABEL = "All Appliance Repair Services";
const CTA_HREF = "/services";

const ctaClasses =
  "inline-flex items-center justify-center rounded-xl bg-brand px-6 py-2.5 font-manrope text-[18px] font-semibold leading-7 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 gap-1";

export function Services() {
  return (
    <section
      className="pt-3 lg:pt-24 bg-white"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="mb-3 lg:mb-12">
          <div className="text-center lg:text-left grid grid-cols-1 gap-0.5 lg:grid-cols-2 lg:gap-0  lg:items-center">
            <h2
              id="services-heading"
              className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[48px] lg:leading-14"
            >
              Appliance repair Services we provide
            </h2>

            <div>
              <p className="font-manrope text-[12px] leading-4.5 text-secondary  lg:text-[18px] lg:leading-6">
                Reliable appliance repairs backed by 8+ years of experience
              </p>
            </div>

            {/* Desktop CTA */}
          </div>
          <div className="hidden lg:flex w-1/2 ml-auto mt-4">
            <Link href={CTA_HREF} className={`${ctaClasses} w-full`}>
              {CTA_LABEL} <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <ServicesGrid />

        {/* Mobile CTA */}
        <div className="mt-4 lg:hidden">
          <Link href={CTA_HREF} className={`${ctaClasses} w-full`}>
            {CTA_LABEL} <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
