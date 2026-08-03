import Image from "next/image";
import Link from "next/link";
import { brands } from "@/content/brands";
import { Container } from "@/shared/layout/Container";

export function BrandsList() {
  return (
    <section aria-labelledby="brands-list-heading" className="bg-white py-12 lg:py-20">
      <Container>
        <div className="mb-8 lg:mb-10 max-w-3xl">
          <h2
            id="brands-list-heading"
            className="font-work-sans font-bold text-dark text-[22px] leading-7 lg:text-[32px] lg:leading-10 mb-3"
          >
            Appliance Brands We Repair
          </h2>
          <p className="font-manrope text-secondary text-sm lg:text-base leading-6">
            Margus Appliance Repair services all major appliance brands in
            Cleveland, Parma, and the Greater Cleveland area — from everyday
            names to high-end, professional-grade appliances. Same-day
            service, honest upfront pricing, and every repair backed by a
            180-day parts &amp; labor warranty.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-[#F6F6F6] p-6 transition-colors hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} appliance repair`}
                  fill
                  sizes="(min-width: 1024px) 160px, 33vw"
                  className="object-contain"
                />
              </div>
              <span className="font-manrope text-sm font-semibold text-dark group-hover:text-brand transition-colors">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
