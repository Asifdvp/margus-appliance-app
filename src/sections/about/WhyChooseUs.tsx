import type { ReactNode } from "react";
import { Container } from "@/shared/layout/Container";
import { cn } from "@/shared/lib/utils";
import DateIcon from "@/shared/icons/date.svg";
import CustomerIcon from "@/shared/icons/customer.svg";
import JobsIcon from "@/shared/icons/jobs.svg";
import WarrantyIcon from "@/shared/icons/about-warranty.svg";
import WarrantyMainIcon from "@/shared/icons/warranty.svg";

const FEATURES = [
  "Transparent flat-rate pricing",
  "Warranty on parts & labor",
  "Certified technicians",
  "Genuine manufacturer parts",
  "Fast response times",
  "Friendly local support",
] as const;

type StatVariant = "orange" | "brand";
type Corner = "tl" | "tr" | "bl" | "br";

type Stat = {
  value: string;
  label: string;
  icon: ReactNode;
  variant: StatVariant;
  outerCorner: Corner;
  fillColor: string;
};

const CORNER_POS: Record<Corner, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0",
};

const VARIANT_BG: Record<StatVariant, string> = {
  orange: "bg-main-orange",
  brand: "bg-secondary-brand",
};

const STATS: Stat[] = [
  {
    value: "10+",
    label: "Years Active",
    icon: <DateIcon />,
    variant: "orange",
    outerCorner: "br",
    fillColor: "#FFBF3D",
  },
  {
    value: "6000+",
    label: "Satisfied Customers",
    icon: <CustomerIcon />,
    variant: "brand",
    outerCorner: "bl",
    fillColor: "#FFBF3D",
  },
  {
    value: "5 000+",
    label: "Jobs Done",
    icon: <JobsIcon />,
    variant: "brand",
    outerCorner: "tr",
    fillColor: "#FFBF3D",
  },
  {
    value: "90",
    label: "Day Warranty",
    icon: <WarrantyMainIcon />,
    variant: "orange",
    outerCorner: "tl",
    fillColor: "#FFBF3D",
  },
];

function StatCard({ value, label, icon, variant, outerCorner, fillColor }: Stat) {
  const fillCorners = [outerCorner];
  return (
    <div className="relative">
      {fillCorners.map((corner) => (
        <div
          key={corner}
          aria-hidden="true"
          className={cn("absolute w-5 h-5", CORNER_POS[corner])}
          style={{ backgroundColor: fillColor }}
        />
      ))}
      <article
        className={cn("text-white relative z-10 rounded-3xl p-5 lg:p-12 flex flex-col items-center justify-center gap-0.5 text-center", VARIANT_BG[variant])}
        aria-label={`${value} ${label}`}
      >
        <div className="flex items-center justify-center gap-1.5 md:gap-2">
          <span
            className="h-5 w-5 md:h-9 md:w-9 shrink-0 [&>svg]:w-full [&>svg]:h-full"
            aria-hidden="true"
          >
            {icon}
          </span>
          <p className="font-work-sans font-bold text-[24px] leading-8 md:text-[48px] md:leading-14">
            {value}
          </p>
        </div>
        <p className="font-manrope text-xs leading-4.5 md:text-[18px] md:leading-7 font-normal">
          {label}
        </p>
      </article>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-1 font-work-sans text-xs md:text-base md:leading-6 text-dark leading-4.5 font-medium">
      <WarrantyIcon />
      {text}
    </li>
  );
}

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-white pt-3 pb-10.5 lg:py-18"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0">
          {/* Left — text */}
          <div className="lg:max-w-[45%]">
            <h2
              id="why-choose-heading"
              className="font-work-sans font-bold text-dark text-[18px] leading-6 md:text-[32px] md:leading-10 mb-4"
            >
              Why Homeowners Choose Margus Appliance
            </h2>
            <p className="font-manrope font-normal text-dark text-xs md:text-[18px] leading-4.5 md:leading-7 mb-0.5 md:mb-4">
              From same-day service to transparent pricing, we make appliance
              repair simple, stress-free, and dependable for local homeowners.
            </p>
            <ul className="flex flex-col gap-2.5" aria-label="Our advantages">
              {FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-0">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
