import type { Service } from "@/types";
import { Button } from "@/shared/ui/Button";
import { PageWrapper } from "@/shared/layout/PageWrapper";

type Props = {
  service: Service;
};

export function ServiceDetail({ service }: Props) {
  return (
    <PageWrapper>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{service.description}</p>
        {service.details && (
          <p className="mt-6 text-zinc-500 leading-relaxed">{service.details}</p>
        )}
        <div className="mt-10">
          <Button href="/contact">Book This Service</Button>
        </div>
      </div>
    </PageWrapper>
  );
}
