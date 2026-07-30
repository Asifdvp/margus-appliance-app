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
    id: "book-in-minutes",
    iconSrc: requestIcon,
    title: "Book in Minutes",
    description:
      "Schedule your repair by phone, email, or online — whichever is easiest. Same-day appointments are available seven days a week.",
  },
  {
    id: "on-site-diagnosis",
    iconSrc: diagnosisIcon,
    title: "On-Site Diagnosis",
    description:
      "A certified technician arrives fully equipped, inspects your appliance, and pinpoints the root cause of the problem.",
  },
  {
    id: "upfront-quote",
    iconSrc: repairIcon,
    title: "Upfront Quote",
    description:
      "Before any work begins, you get a clear, honest price — no hidden fees and no surprises on the final invoice.",
  },
  {
    id: "licensed-insured",
    iconSrc: testIcon,
    title: "Licensed and Insured",
    description:
      "Once you approve, we complete the repair with manufacturer-approved parts, test the appliance, and back it with our 180-day parts & labor warranty.",
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
            Our Simple 4-Step Repair Process — From Call to Fix
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
