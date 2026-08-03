import { Container } from "@/shared/layout/Container";
import { ServicesGrid } from "@/shared/ui/ServicesGrid";

export function ServicesList() {
  return (
    <section aria-labelledby="services-list-heading" className="bg-white pt-6 lg:pt-8">
      <Container>
        <div className="mb-8 lg:mb-10 max-w-3xl">
          <h2
            id="services-list-heading"
            className="font-work-sans font-bold text-dark text-[22px] leading-7 lg:text-[32px] lg:leading-10 mb-3"
          >
            Appliance Repair Services in Cleveland & Parma
          </h2>
          <p className="font-manrope text-secondary text-sm lg:text-base leading-6">
            From refrigerators to ovens, Margus Appliance Repair fixes every
            major kitchen and laundry appliance for homeowners across
            Cleveland, Parma, and the Greater Cleveland area. Same-day
            appointments, honest upfront pricing, and every repair backed by
            a 180-day parts &amp; labor warranty.
          </p>
        </div>
        <ServicesGrid />

        <div className="mt-10 lg:mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[24px] lg:leading-8 mb-2">
              Brands We Repair
            </h2>
            <p className="font-manrope text-secondary text-xs lg:text-base leading-4.5 lg:leading-6">
              We service all major appliance brands, including Samsung, LG,
              Whirlpool, GE, Maytag, Bosch, KitchenAid, Frigidaire, and
              Fisher &amp; Paykel — both gas and electric models. Whatever
              brand you own, our technicians carry the knowledge and common
              parts to fix it right the first time.
            </p>
          </div>
          <div>
            <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[24px] lg:leading-8 mb-2">
              Serving Cleveland, Parma &amp; Greater Cleveland
            </h2>
            <p className="font-manrope text-secondary text-xs lg:text-base leading-4.5 lg:leading-6">
              Based in Parma, we provide appliance repair across Cleveland,
              Parma, Lakewood, Strongsville, Euclid, Solon, Westlake, North
              Olmsted, Cleveland Heights, and surrounding Greater Cleveland
              communities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
