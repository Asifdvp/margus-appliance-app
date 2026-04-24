import { brands } from "@/content/brands";
import { Container } from "@/shared/layout/Container";

export function Brands() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-widest text-zinc-400 mb-8">
          Brands We Service
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <span
              key={brand.id}
              className="text-lg font-semibold text-zinc-400 hover:text-foreground transition-colors"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
