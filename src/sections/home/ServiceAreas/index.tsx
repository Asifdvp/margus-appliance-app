import { SERVICE_AREAS } from "@/content/service-areas";
import { Container } from "@/shared/layout/Container";
import { Button } from "@/shared/ui/Button";
import { DynamicServiceAreaMap } from "./MapDynamic";

function LocationPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 1.667A5.833 5.833 0 0 0 4.167 7.5c0 4.375 5.833 10.833 5.833 10.833S15.833 11.875 15.833 7.5A5.833 5.833 0 0 0 10 1.667zm0 7.916a2.083 2.083 0 1 1 0-4.166 2.083 2.083 0 0 1 0 4.166z"
        fill="#5500CC"
      />
    </svg>
  );
}

export function ServiceAreas() {
  return (
    <section className="py-12 lg:py-20 bg-white" aria-labelledby="service-areas-heading">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">

          {/* Left — content */}
          <div>
            <h2
              id="service-areas-heading"
              className="font-work-sans font-bold text-dark text-[26px] leading-8.5 lg:text-[40px] lg:leading-12.5 mb-4 lg:mb-6"
            >
              Appliance Repair Service Areas Near Cleveland
            </h2>

            <p className="font-manrope text-[14px] leading-5.5 text-[#535756] lg:text-[16px] lg:leading-7 mb-6 lg:mb-8">
              We serve Parma, Cleveland, and surrounding cities, providing fast
              and reliable repair for refrigerators, washers, dryers, and other
              household appliances, helping keep your home running smoothly
              without interruptions.
            </p>

            <Button
              href="/service-areas"
              variant="primary"
              className="mb-8 lg:mb-10 rounded-xl bg-brand px-8 py-3 text-[15px] font-semibold text-white hover:bg-brand/90"
            >
              Learn More ↗
            </Button>

            {/* City grid */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2.5 rounded-xl border border-black/6 bg-[#F8F8F8] px-4 py-3"
                >
                  <LocationPinIcon />
                  <span className="font-manrope text-[14px] font-medium text-dark lg:text-[15px]">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div className="h-85 lg:h-140 rounded-2xl overflow-hidden shadow-sm">
            <DynamicServiceAreaMap />
          </div>

        </div>
      </Container>
    </section>
  );
}
