import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { SERVICE_AREA_HIGHLIGHTS } from "@/content/service-area-highlights";
import ArrowIcon from "@/shared/icons/right-arrow.svg";

export function ServiceAreaHighlights() {
  return (
    <section className="bg-[#F6F6F6] py-10 lg:py-16" aria-labelledby="service-area-highlights-heading">
      <Container>
        <h2
          id="service-area-highlights-heading"
          className="font-work-sans font-bold text-dark text-[20px] leading-6.5 lg:text-[32px] lg:leading-10 mb-2"
        >
          Appliance Repair Across Greater Cleveland
        </h2>
        <p className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary mb-6 lg:mb-10 max-w-211.5">
          We repair refrigerators, washers, dryers, dishwashers, ovens, and more in 57+ cities across Northeast Ohio. Here's what appliance repair looks like in a few of the areas we cover most.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICE_AREA_HIGHLIGHTS.map((area) => (
            <div key={area.name} className="bg-white rounded-2xl p-4 lg:p-6">
              <h3 className="font-work-sans font-bold text-dark text-[16px] leading-5.5 lg:text-[20px] lg:leading-7 mb-2">
                {area.name} Appliance Repair
              </h3>
              <p className="font-manrope text-xs md:text-sm leading-4.5 md:leading-5.5 text-secondary">
                {area.text}
              </p>
              {area.jobSlug && (
                <Link
                  href={`/jobs/${area.jobSlug}`}
                  className="mt-3 inline-flex items-center gap-1 font-manrope text-xs md:text-sm font-semibold text-brand hover:underline"
                >
                  {area.jobLabel}
                  <ArrowIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
