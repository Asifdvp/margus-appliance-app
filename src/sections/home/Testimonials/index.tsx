import { testimonials } from "@/content/testimonials";
import { Container } from "@/shared/layout/Container";
import { TestimonialsCarousel } from "./Carousel";

export function Testimonials() {
  return (
    <section className="py-6 bg-dark overflow-hidden lg:py-12" aria-labelledby="testimonials-heading">
      <Container>
        <div className="mb-4 lg:mb-14 lg:grid lg:grid-cols-2  lg:items-center">
          <h2
            id="testimonials-heading"
            className="font-work-sans font-bold text-white text-[24px] leading-8 lg:text-[48px] lg:leading-14"
          >
            Real Stories.<br />Real Satisfaction.
          </h2>
          <p className="mt-4 font-manrope text-sm leading-5.5 text-white lg:mt-0 lg:text-[18px] lg:leading-7 paragra">
            At Margus Appliance, we&apos;re committed to keeping your home appliances running smoothly.
            With years of hands-on experience, our mission is simple: fast, honest, and expert
            service that our customers can depend on.
          </p>
        </div>

<div className="mt-2">
        <TestimonialsCarousel items={testimonials} />

</div>

      </Container>

      {/* Full-bleed carousel — outside Container so cards bleed to edges */}
      <div className="mt-2 px-4 sm:px-6 lg:px-20">
      </div>
    </section>
  );
}
