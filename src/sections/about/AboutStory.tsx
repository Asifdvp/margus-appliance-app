import { Container } from "@/shared/layout/Container";

export function AboutStory() {
  return (
    <section className="bg-white pt-8 pb-3 lg:pt-16 lg:pb-6" aria-labelledby="about-story-heading">
      <Container>
        <div className="max-w-3xl">
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary mb-6 md:mb-10">
            Homeowners in Cleveland and Parma searching for dependable appliance
            repair turn to Margus Appliance Repair — a local, family-owned
            company based in Parma, Ohio. For 8 years, our certified
            technicians have delivered same-day service, honest upfront
            pricing, and lasting repairs backed by a 180-day parts &amp; labor
            warranty. We repair all major appliances and all major brands, and
            we treat every home like it&apos;s in our own neighborhood —
            because it usually is.
          </p>

          <h2
            id="about-story-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-2 md:mb-4"
          >
            Who We Are
          </h2>
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary mb-6 md:mb-10">
            Margus Appliance Repair is a family-owned business, not a faceless
            national chain. We&apos;re based right here in Parma and serve
            homeowners across Cleveland and the surrounding Greater Cleveland
            communities. That local footprint means shorter travel times,
            flexible scheduling, and technicians who actually know the area
            they serve. With 8 years of hands-on experience and a 4.9-star
            rating on Google, we&apos;ve built our reputation one honest
            repair at a time.
          </p>

          <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-2 md:mb-4">
            Our Mission
          </h2>
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary">
            Our mission is simple: fast, honest, expert appliance repair that
            families can depend on. A broken refrigerator or a dryer that
            won&apos;t heat disrupts your whole household — so we focus on
            getting it fixed right the first time, without upsells, surprise
            charges, or guesswork. We&apos;d rather earn a customer for life
            than push an unnecessary sale.
          </p>
        </div>
      </Container>
    </section>
  );
}
