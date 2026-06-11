import { type StaticImageData } from "next/image";
import { Container } from "@/shared/layout/Container";
import { StepCard } from "@/shared/ui/StepCard";
import requestIcon from "@/shared/icons/steps/request.png";
import diagnosisIcon from "@/shared/icons/steps/diagnosis.png";
import repairIcon from "@/shared/icons/steps/repair.png";
import testIcon from "@/shared/icons/steps/test.png";

type Feature = {
  id: string;
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    id: "same-day",
    iconSrc: requestIcon,
    title: "Same-Day Service",
    description:
      "Book your appliance repair by phone, email, or online — fast and easy, available 24/7.",
  },
  {
    id: "one-visit",
    iconSrc: diagnosisIcon,
    title: "One Visit Repairs",
    description:
      "Our certified technician arrives fully equipped to diagnose your appliance and provide an upfront quote.",
  },
  {
    id: "honest-pricing",
    iconSrc: repairIcon,
    title: "Honest Pricing",
    description:
      "We use only manufacturer-approved parts to ensure long-lasting performance and reliable repairs.",
  },
  {
    id: "licensed",
    iconSrc: testIcon,
    title: "Licensed and Insured",
    description:
      "Every repair is backed by our 90-day parts & labor warranty for your complete peace of mind.",
  },
];

export function AboutFeatures() {
  return (
    <section aria-labelledby="about-features-heading">
      <Container>
        <div className="mb-7 md:mb-8">
          <h2
            id="about-features-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10"
          >
            Our Simple 4-Step Appliance Repair Process — From Call to Fix
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {FEATURES.slice(0, 2).map((f) => (
            <StepCard
              key={f.id}
              iconSrc={f.iconSrc}
              title={f.title}
              description={f.description}
            />
          ))}
          <hr
            className="col-span-2 lg:hidden border-t border-dark/10"
            aria-hidden="true"
          />
          {FEATURES.slice(2).map((f) => (
            <StepCard
              key={f.id}
              iconSrc={f.iconSrc}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
