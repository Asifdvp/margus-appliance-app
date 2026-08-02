import { Container } from "@/shared/layout/Container";

type TrustPoint = {
  title: string;
  description: string;
};

const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Transparent pricing",
    description:
      "Cost surprises are one of the biggest frustrations homeowners face after a technician leaves. We present clear pricing before any work begins, with no hidden fees on the final invoice. Our diagnostic fee is $89, and it's waived when you move forward with the repair.",
  },
  {
    title: "Same-day service",
    description:
      "When a refrigerator stops cooling on a Saturday night, waiting until Monday isn't an option. We offer same-day and next-day appointments, seven days a week, whenever scheduling allows.",
  },
  {
    title: "Warrantied work",
    description:
      "Every completed repair is backed by our 180-day parts & labor warranty.",
  },
  {
    title: "First-visit fixes",
    description:
      "Our technicians arrive fully equipped with common parts and diagnostic tools, so most repairs are completed in a single visit.",
  },
  {
    title: "Licensed, experienced technicians",
    description:
      "Trained on all major brands, with the know-how to diagnose the real problem instead of replacing parts by trial and error.",
  },
];

export function AboutTrust() {
  return (
    <section
      className="bg-[#F6F6F6] py-8 lg:py-16"
      aria-labelledby="about-trust-heading"
    >
      <Container>
        <div className="max-w-3xl mb-4 md:mb-8">
          <h2
            id="about-trust-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-2 md:mb-4"
          >
            Why Cleveland &amp; Parma Homeowners Trust Us
          </h2>
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary">
            Reliability is what sets a trusted local appliance repair company
            apart from a one-off contractor. For our customers, that
            reliability shows up in concrete ways:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {TRUST_POINTS.map((point) => (
            <div key={point.title} className="bg-white rounded-xl p-4 md:p-6">
              <h3 className="font-work-sans font-bold text-dark text-[14px] leading-4.5 md:text-[20px] md:leading-7 mb-1.5 md:mb-2">
                {point.title}
              </h3>
              <p className="font-manrope text-xs md:text-[16px] leading-4.5 md:leading-6 text-secondary">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
