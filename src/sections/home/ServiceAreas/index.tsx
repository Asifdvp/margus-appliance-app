import { SERVICE_AREAS } from "@/content/service-areas";
import { Container } from "@/shared/layout/Container";
import { Button } from "@/shared/ui/Button";
import { DynamicServiceAreaMap } from "./MapDynamic";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";
import LocationPinIcon from "@/shared/icons/point.svg";
import Link from "next/link";


export function ServiceAreas() {
  return (
    <section
      className="pb-14 lg:pb-30 bg-white"
      aria-labelledby="service-areas-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-12">
          <h2
            id="service-areas-heading"
            className="font-work-sans font-bold text-dark text-[24px] leading-8 lg:text-[48px] lg:leading-14"
          >
            Appliance Repair Service Areas Near Cleveland
          </h2>
          <div>
            <p className="font-manrope text-[14px] leading-5.5 text-secondary lg:text-[18px] lg:leading-7 mb-4">
              We serve Parma, Cleveland, and surrounding cities, providing fast
              and reliable repair for refrigerators, washers, dryers, and other
              household appliances, helping keep your home running smoothly
              without interruptions.
            </p>

            <Link
              href="/service-areas"
              // variant="primary"
              className="w-full  rounded-xl bg-brand px-4 py-2.5 text-[15px] lg:text-[18px] lg:leading-7 font-semibold text-white hover:bg-brand/90 hidden lg:flex items-center justify-center gap-1"
            >
              Learn More <RightArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          {/* Left — content */}
          <div>
      

            {/* City grid */}
            <div className="flex flex-wrap gap-2 md:grid md:grid-cols-3 lg:grid-cols-2 md:gap-6">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 rounded-xl  bg-[#F6F6F6] p-3 lg:px-6 lg:py-5 lg:gap-1.5"
                >
                  <LocationPinIcon className="shrink-0 w-4 h-4 lg:w-6 lg:h-6" />
                  <span className="font-manrope text-[14px] font-semibold leading-5.5 lg:text-[18px] lg:leading-7 text-dark">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="isolate h-97.5 lg:h-full rounded-3xl overflow-hidden shadow-sm">
            <DynamicServiceAreaMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
