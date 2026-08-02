import Image from "next/image";
import { brands } from "@/content/brands";
import { PageWrapper } from "@/shared/layout/PageWrapper";

export function BrandsList() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Brands We Service</h1>
        <p className="mt-4 text-zinc-600">
          Certified repair for all major appliance brands in Cleveland &amp; Parma, OH —
          from everyday names to high-end and professional-grade appliances.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-black/8 p-6 transition-colors hover:border-foreground"
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
            <span className="text-sm font-semibold text-zinc-500">{brand.name}</span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
