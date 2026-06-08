import { brands } from "@/content/brands";
import { Container } from "@/shared/layout/Container";
import { BrandsCarousel } from "./Carousel";

export function Brands() {
  return (
    <section className=" bg-white pt-1">
      <Container>
        <div className="grid grid-cols-1 gap-3 lg:gap-5 items-center justify-center">
          <div>
            <h2 className="text-center text-brand text-base leading-6 font-work-sans font-semibold mb-0.5 md:mb-4 md:font-bold md:text-[32px] md:leading-10 ">
              Appliance Brands We Repair
            </h2>
            <p className="text-center font-manrope font-normal text-[14px] leading-4.5 text-secondary md:text-[18px] md:leading-7">
             From everyday brands to hight-end appliances
            </p>
          </div>

          <div className="min-w-0 max-w-full lg:max-w-200 mx-auto overflow-hidden">
            <BrandsCarousel brands={brands} />
          </div>
        </div>
      </Container>
    </section>
  );
}
