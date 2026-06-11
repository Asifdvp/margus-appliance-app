import { SERVICES } from "@/content/services";
import { ServiceCard } from "@/shared/ui/ServiceCard";
import type { Service } from "@/types";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {SERVICES.map((service: Service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          href={service.href || ""}
        />
      ))}
    </div>
  );
}
