import { brands } from "@/content/brands";
import { PageWrapper } from "@/shared/layout/PageWrapper";

export function BrandsList() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Brands We Service</h1>
        <p className="mt-4 text-zinc-600">
          We work with all major appliance brands.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center rounded-xl border border-black/[.08] p-6 text-lg font-semibold text-zinc-500 hover:border-foreground hover:text-foreground transition-colors"
          >
            {brand.name}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
