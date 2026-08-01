import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import { Container } from "@/shared/layout/Container";
import { TestimonialsCarousel } from "./Carousel";
import { getGoogleBusinessData } from "@/shared/lib/googleReviews";
import type { Testimonial } from "@/types";

// Below this many real Google reviews with text, the carousel looks sparse
// (it repeats items to fill 3 columns) — fall back to curated content instead.
const MIN_REAL_REVIEWS = 6;

export async function Testimonials() {
  const googleData = await getGoogleBusinessData();

  const testimonials: Testimonial[] =
    googleData && googleData.reviews.length >= MIN_REAL_REVIEWS
      ? googleData.reviews.map((r) => ({
          id: r.id,
          text: r.text,
          name: r.author,
          location: "Verified Google Review",
          image: r.authorPhoto,
        }))
      : fallbackTestimonials;

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
            At Margus Appliance Repair, we&apos;re committed to keeping your
            appliances running smoothly. With 8 years of hands-on experience
            serving Cleveland and Parma, our mission is simple: fast, honest,
            expert service you can depend on.
          </p>
        </div>

        <TestimonialsCarousel items={testimonials} />
      </Container>

      {/* Full-bleed carousel — outside Container so cards bleed to edges */}
      <div className="mt-2 px-4 sm:px-6 lg:px-20"></div>
    </section>
  );
}
