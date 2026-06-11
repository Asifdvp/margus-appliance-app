import { Container } from "@/shared/layout/Container";
import { ServiceAreaInteractive } from "@/shared/ui/ServiceAreaInteractive";

export function ServiceAreasSection() {
  return (
    <section
      className="bg-white pt-3 pb-10.5  lg:py-18"
      aria-label="Service areas map"
    >
      <Container>
        <p className="font-manrope text-[12px] leading-4.5 text-secondary md:text-[18px] md:leading-7 mb-4 md:mb-8">
          We serve Parma, Cleveland, and surrounding cities, providing fast and
          reliable repair for refrigerators, washers, dryers, and other
          household appliances, helping keep your home running smoothly without
          interruptions.
        </p>
        <ServiceAreaInteractive />
      </Container>
    </section>
  );
}
