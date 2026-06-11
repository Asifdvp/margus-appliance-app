import { testimonials } from "@/content/testimonials";
import { Container } from "@/shared/layout/Container";
import { TestimonialsCarousel } from "./Carousel";

export function Testimonials() {
  return (
    <section
      className="mt-10.5 lg:mt-24  py-6 bg-[#DFDFDF] overflow-hidden lg:py-12"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="mb-4 lg:mb-14 lg:grid lg:grid-cols-2  lg:items-center">
          <h2
            id="testimonials-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[48px] lg:leading-14"
          >
            Real Stories.
            <br />
            Real Satisfaction.
          </h2>
          <p className="mt-4 font-manrope text-xs leading-4.5 text-dark lg:mt-0 lg:text-[18px] lg:leading-7 ">
            At Margus Appliance, we&apos;re committed to keeping your home
            appliances running smoothly. With years of hands-on experience, our
            mission is simple: fast, honest, and expert service that our
            customers can depend on.
          </p>
        </div>

        <TestimonialsCarousel items={testimonials} />
      </Container>

      {/* Full-bleed carousel — outside Container so cards bleed to edges */}
      <div className="mt-2 px-4 sm:px-6 lg:px-20"></div>
    </section>
  );
}
