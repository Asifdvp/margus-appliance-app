import Image from "next/image";
import { Container } from "@/shared/layout/Container";

type PageHeroProps = {
  heading: string;
  src: string;
  alt: string;
  eyebrow?: string;
  badges?: string[];
};

export function PageHero({ heading, src, alt, eyebrow, badges }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className="relative isolate overflow-hidden h-60 md:h-80 lg:h-95"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-dark/46" aria-hidden="true" />
      <Container className="relative h-full flex items-center">
        <div>
          {eyebrow && (
            <p className="font-manrope font-semibold text-xs lg:text-sm uppercase tracking-wide text-white/80 mb-2">
              {eyebrow}
            </p>
          )}
          <h1
            id="page-hero-heading"
            className="text-left font-work-sans font-bold text-white text-[30px] leading-8.75 lg:text-[56px] lg:leading-18 max-w-87.5 sm:max-w-sm lg:max-w-193.5"
          >
            {heading}
          </h1>
          {badges && badges.length > 0 && (
            <p className="mt-3 font-manrope text-xs lg:text-sm text-white/85">
              {badges.join(" · ")}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
