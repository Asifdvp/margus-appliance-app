import { testimonials } from "@/content/testimonials";
import { Container } from "@/shared/layout/Container";
import { TestimonialsCarousel } from "./Carousel";

export function Testimonials() {
  return (
    <section className="py-12 bg-dark overflow-hidden lg:py-20" aria-labelledby="testimonials-heading">
      <Container>
        <div className="mb-8 lg:mb-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <h2
            id="testimonials-heading"
            className="font-work-sans font-bold text-white text-[28px] leading-[1.15] lg:text-[52px]"
          >
            Real Stories.<br />Real Satisfaction.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 lg:mt-0 lg:text-base">
            At Margus Appliance, we&apos;re committed to keeping your home appliances running smoothly.
            With years of hands-on experience, our mission is simple: fast, honest, and expert
            service that our customers can depend on.
          </p>
        </div>
      </Container>

      {/* Full-bleed carousel — outside Container so cards bleed to edges */}
      <div className="mt-2 px-4 sm:px-6 lg:px-20">
        <TestimonialsCarousel items={testimonials} />
      </div>
    </section>
  );
}
