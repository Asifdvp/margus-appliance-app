import { services } from "@/content/services";
import { ServiceCard } from "./ServiceCard";
import { PageWrapper } from "@/shared/layout/PageWrapper";

export function ServicesList() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 text-zinc-600">
          Comprehensive appliance services for every need.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </PageWrapper>
  );
}
