import { brands } from "@/content/brands";
import { Container } from "@/shared/layout/Container";
import { BrandsCarousel } from "./Carousel";

export function Brands() {
  return (
    <section className="lg:mb-7 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[4.7fr_7.3fr] gap-4 lg:gap-5 items-center">
          <div>
            <h2 className="text-dark text-2xl leading-8 font-work-sans font-bold mb-4 lg:text-[32px] lg:leading-10">
              Appliance Brands We Repair
            </h2>
            <p className="font-manrope font-normal text-[14px] leading-5.5 text-secondary lg:text-[18px] lg:leading-7">
              Our certified technicians use genuine manufacturer parts and stand
              behind every repair with a parts and 90 day warranty
            </p>
          </div>

          <div className="min-w-0 overflow-hidden">
            <BrandsCarousel brands={brands} />
          </div>
        </div>
      </Container>
    </section>
  );
}
