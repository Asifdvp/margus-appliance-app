import { Container } from "@/shared/layout/Container";

export function AboutCoverage() {
  return (
    <section className="bg-white pb-8 lg:pb-16" aria-labelledby="about-coverage-heading">
      <Container>
        <div className="max-w-3xl">
          <h2
            id="about-coverage-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-2 md:mb-4"
          >
            What We Repair
          </h2>
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary mb-6 md:mb-10">
            We repair all major household appliances, including refrigerators,
            freezers, washers, dryers, dishwashers, ovens, stoves and
            cooktops, and ice makers. We service all major brands, including
            Samsung, LG, Whirlpool, GE, Maytag, Bosch, KitchenAid, and
            Frigidaire — both gas and electric models. Whether the problem is
            a warming freezer or a dryer that won&apos;t heat, one call
            handles it.
          </p>

          <h2 className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[32px] lg:leading-10 mb-2 md:mb-4">
            Areas We Serve
          </h2>
          <p className="font-manrope text-xs md:text-[18px] leading-4.5 md:leading-7 text-secondary">
            We proudly serve Cleveland, Parma, and the surrounding Greater
            Cleveland area, including Lakewood, Strongsville, Euclid, Solon,
            Westlake, North Olmsted, Cleveland Heights, Avon, and Medina, plus
            many surrounding communities.
          </p>
        </div>
      </Container>
    </section>
  );
}
