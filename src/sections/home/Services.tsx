import Link from "next/link";
import { SERVICES } from "@/content/services";
import { Container } from "@/shared/layout/Container";
import { ServiceCard } from "@/shared/ui/ServiceCard";
import {
  KitchenIcon,
  WasherIcon,
  DryerIcon,
  RefrigeratorIcon,
  DishwasherIcon,
  FreezerIcon,
  IceMakerIcon,
  OvenStoveIcon,
} from "@/shared/icons/ApplianceIcons";
import type { Service } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  kitchen: <KitchenIcon />,
  washer: <WasherIcon />,
  dryer: <DryerIcon />,
  refrigerator: <RefrigeratorIcon />,
  dishwasher: <DishwasherIcon />,
  freezer: <FreezerIcon />,
  "ice-maker": <IceMakerIcon />,
  "oven-stove": <OvenStoveIcon />,
};

const CTA_LABEL = "All Appliance Repair Services ↗";
const CTA_HREF = "/services";

const ctaClasses =
  "inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-manrope text-[14px] font-semibold leading-6 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:text-[16px] lg:px-8";

export function Services() {
  return (
    <section
      className="py-12 lg:py-30 bg-white"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Header row */}
        <div className="mb-6 lg:mb-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8  lg:items-center">
          <h2
            id="services-heading"
            className="font-work-sans font-bold text-dark text-[24px] leading-[32px] lg:text-[48px] lg:leading-[56px]"
          >
            Trusted Appliance Repair Company Serving Greater Cleveland Since
            2010
          </h2>

          <p className="font-manrope text-[14px] leading-[22px] text-[#535756]  lg:text-[18px] lg:leading-[28px]">
            At Margus Appliance, we&apos;ve been keeping Cleveland and Parma
            homes running smoothly since 2010. Our licensed technicians diagnose
            fast and fix it right the first time — using genuine manufacturer
            parts and backing every repair with a written warranty.
          </p>

          {/* Desktop CTA */}
        </div>
        <div className=" items-end justify-end mt-4 hidden lg:flex">
          <Link
            href={CTA_HREF}
            className={`${ctaClasses} hidden lg:inline-flex`}
          >
            {CTA_LABEL}
          </Link>
        </div>
</div>
        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {SERVICES.map((service: Service) => (
            <ServiceCard
              key={service.id}
              icon={iconMap[service.id]}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 lg:hidden">
          <Link href={CTA_HREF} className={`${ctaClasses} w-full`}>
            {CTA_LABEL}
          </Link>
        </div>
      </Container>
    </section>
  );
}
