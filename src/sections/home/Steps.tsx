import Link from "next/link";
import { Container } from "@/shared/layout/Container";

import ScheduleIcon from "@/shared/icons/steps/booking.svg";
import DiagnosisIcon from "@/shared/icons/steps/diagnosis.svg";
import RepairIcon from "@/shared/icons/steps/repair.svg";
import WarrantyIcon from "@/shared/icons/steps/warranty.svg";

import type {  Step } from "@/types";
import  ArrowIcon  from "@/shared/icons/right-arrow.svg";
import { StepCard } from "@/shared/ui/StepCard";
import { STEPS } from "@/content/steps";


const iconMap: Record<string, React.ReactNode> = {
  schedule: <ScheduleIcon />,
  diagnosis: <DiagnosisIcon />,
  repair: <RepairIcon />,
  warranty: <WarrantyIcon />,
};

const CTA_LABEL = "How we work" 
const CTA_HREF = "/about";

const ctaClasses =
  "inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-2.5 font-manrope text-[18px] font-semibold leading-7 text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 flex items-center gap-1";

export function Steps() {
  return (
    <section
      className="py-14 lg:py-30 bg-white"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Header row */}
        <div className="mb-4 lg:mb-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8  lg:items-center">
            <h2
              id="services-heading"
              className="font-work-sans font-bold text-dark text-[24px] leading-8 lg:text-[48px] lg:leading-14"
            >
             Our Simple 4-Step Appliance Repair Process — From Call to Fix
            </h2>

            <div>

              <div className=" items-end justify-end mt-4 hidden lg:flex">
                <Link
                  href={CTA_HREF}
                  className={`${ctaClasses} hidden lg:inline-flex`}
                >
                  {CTA_LABEL} <ArrowIcon/>
                </Link>
              </div>
            </div>

            {/* Desktop CTA */}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((service: Step) => (
            <StepCard
              key={service.id}
              icon={iconMap[service.id]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-4 lg:hidden">
          <Link href={CTA_HREF} className={`${ctaClasses} w-full`}>
            {CTA_LABEL} <ArrowIcon/>
          </Link>
        </div>
      </Container>
    </section>
  );
}
