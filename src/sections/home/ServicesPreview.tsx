import { services } from "@/content/services";
import { ServiceCard } from "@/sections/services/ServiceCard";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/layout/Container";

export function ServicesPreview() {
  const preview = services.slice(0, 3);

  return (
    <section className="py-20 bg-zinc-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-4 text-zinc-600">
            Professional services for every home appliance need.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
