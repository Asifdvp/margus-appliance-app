import Link from "next/link";
import type { Service } from "@/types";
import { Card } from "@/shared/ui/Card";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <Link href={`/services/${service.id}`}>
      <Card className="h-full cursor-pointer">
        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
          {service.description}
        </p>
      </Card>
    </Link>
  );
}
