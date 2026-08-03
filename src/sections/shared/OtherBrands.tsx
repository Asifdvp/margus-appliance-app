import Link from "next/link";
import { brands } from "@/content/brands";
import { Container } from "@/shared/layout/Container";

type Props = { currentId: string };

export function OtherBrands({ currentId }: Props) {
  const others = brands.filter((b) => b.id !== currentId);
  if (others.length === 0) return null;

  return (
    <section
      aria-labelledby="other-brands-heading"
      className="bg-[#F6F6F6] py-10 lg:py-16"
    >
      <Container>
        <h2
          id="other-brands-heading"
          className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[28px] lg:leading-9 mb-6"
        >
          Other Brands We Repair
        </h2>
        <div className="flex flex-wrap gap-3">
          {others.map((b) => (
            <Link
              key={b.id}
              href={`/brands/${b.id}`}
              className="rounded-full bg-white px-4 py-2 font-manrope text-xs lg:text-sm font-medium text-dark border border-dark/10 hover:border-brand hover:text-brand transition-colors"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
