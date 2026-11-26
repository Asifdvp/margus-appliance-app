import { Container } from "@/shared/layout/Container";
import { ServicesGrid } from "@/shared/ui/ServicesGrid";

const sectionHeading =
  "font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[24px] lg:leading-8 mb-2";
const sectionBody =
  "font-manrope text-secondary text-xs lg:text-base leading-4.5 lg:leading-6";

export function ServicesList() {
  return (
    <section aria-labelledby="services-list-heading" className="bg-white pt-6 lg:pt-8">
      <Container>
        <div className="mb-8 lg:mb-10 max-w-3xl">
          <h2
            id="services-list-heading"
            className="font-work-sans font-bold text-dark text-[22px] leading-7 lg:text-[32px] lg:leading-10 mb-3"
          >
            Repairs by Appliance
          </h2>
          <p className="font-manrope text-secondary text-sm lg:text-base leading-6">
            Pick the machine that&apos;s giving you trouble. Each page covers
            the faults our technicians actually see on that appliance, the
            parts behind them, and what the repair involves.
          </p>
        </div>
        <ServicesGrid />

        <div className="mt-10 lg:mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div>
            <h2 className={sectionHeading}>What a Repair Costs</h2>
            <p className={sectionBody}>
              Every visit starts with an $89 diagnostic. The technician finds
              the actual fault instead of guessing from a phone description,
              then quotes the repair before touching anything. Go ahead with
              the work and the $89 comes off the bill.
            </p>
            <p className={`${sectionBody} mt-2`}>
              What the repair itself costs depends on the part. A thermostat,
              door switch or drain pump sits at the low end. A compressor,
              sealed system or control board sits at the high end — and on an
              older machine that is usually the point where replacing makes
              more sense than fixing. You get that number before any work
              begins, and every completed repair carries a 180-day parts and
              labor warranty.
            </p>
          </div>
          <div>
            <h2 className={sectionHeading}>How a Service Call Works</h2>
            <p className={sectionBody}>
              Call or book online and we schedule the visit, same-day or
              next-day when the calendar allows. The technician runs the
              diagnosis on site and explains what failed and why in plain
              terms. You approve the price, the work gets done, and in most
              cases that is the whole job — one visit, one bill.
            </p>
          </div>
          <div>
            <h2 className={sectionHeading}>Why We Diagnose On Site</h2>
            <p className={sectionBody}>
              A dryer that won&apos;t heat can be a thermal fuse, a heating
              element, a cycling thermostat or a blocked vent — four parts,
              four prices. A fridge that stops cooling can be a start relay,
              a condenser fan or a sealed system leak.
            </p>
            <p className={`${sectionBody} mt-2`}>
              The symptom you can describe over the phone rarely identifies
              the part that actually failed, which is why the quote comes
              after the diagnosis instead of before it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
