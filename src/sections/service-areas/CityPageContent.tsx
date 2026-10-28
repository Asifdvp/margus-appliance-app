import Link from "next/link";
import { Container } from "@/shared/layout/Container";
import { SERVICES } from "@/content/services";
import { RECENT_JOBS } from "@/content/recent-jobs";
import type { ServiceAreaHighlight } from "@/content/service-area-highlights";
import { milesFromParma } from "@/shared/lib/geo";
import ArrowIcon from "@/shared/icons/right-arrow.svg";

type Props = {
  city: ServiceAreaHighlight;
  nearbyCities: ServiceAreaHighlight[];
};

export function CityPageContent({ city, nearbyCities }: Props) {
  const cityJobs = RECENT_JOBS.filter((job) => job.location === city.name);
  const distance = milesFromParma(city.name);

  return (
    <section className="bg-white py-10.5 lg:py-18">
      <Container>
        <div className="max-w-211.5 mb-6 lg:mb-10">
          <p className="font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
            {city.text}
          </p>
          {distance !== null && distance > 0 && (
            <p className="mt-3 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary">
              {city.name} is about {distance} miles from our Parma shop — well within our
              same-day service area.
            </p>
          )}
        </div>

        {cityJobs.length > 0 && (
          <div className="mb-8 lg:mb-12">
            <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-4">
              Recent Work in {city.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {cityJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/${job.slug}`}
                  className="bg-[#F6F6F6] rounded-2xl p-4 lg:p-6 hover:bg-brand/5 transition-colors"
                >
                  <p className="font-manrope font-semibold text-xs uppercase tracking-wide text-brand mb-1">
                    {job.service}
                  </p>
                  <h3 className="font-work-sans font-bold text-dark text-[16px] leading-5.5 mb-1">
                    {job.problem}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-manrope text-xs font-semibold text-brand">
                    See the repair
                    <ArrowIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8 lg:mb-12">
          <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-4">
            What We Repair in {city.name}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="rounded-xl bg-[#F6F6F6] px-4 py-3 font-manrope text-xs lg:text-sm font-semibold text-dark hover:bg-brand/10 hover:text-brand transition-colors text-center"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8 lg:mb-12">
          <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
            Why {city.name} Homeowners Choose Margus
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            <li className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
              Same-day appointments across {city.name} and the rest of our 57+ city service area
            </li>
            <li className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
              Honest, upfront pricing — an $89 diagnostic fee, waived when you proceed with the repair
            </li>
            <li className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
              Certified technicians and quality replacement parts for all major brands
            </li>
            <li className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary">
              180-day parts & labor warranty on every repair, no matter which city you&apos;re in
            </li>
          </ul>
        </div>

        {nearbyCities.length > 0 && (
          <div>
            <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-3">
              Nearby Cities We Serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="rounded-full bg-[#F6F6F6] px-4 py-2 font-manrope text-xs lg:text-sm font-semibold text-dark hover:bg-brand/10 hover:text-brand transition-colors"
                >
                  {nearby.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="rounded-full bg-brand px-4 py-2 font-manrope text-xs lg:text-sm font-semibold text-white hover:bg-brand/90 transition-colors"
              >
                See all 57+ cities
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
