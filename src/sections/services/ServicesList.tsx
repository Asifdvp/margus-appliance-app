import { Container } from "@/shared/layout/Container";
import { ServicesGrid } from "@/shared/ui/ServicesGrid";

export function ServicesList() {
  return (
    <section aria-labelledby="services-list-heading" className="bg-white py-12 lg:py-20">
      <Container>
        <ServicesGrid />
      </Container>
    </section>
  );
}
