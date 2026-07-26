import { PageHero } from "@/shared/ui/PageHero";
import type { RecentJob } from "@/types";

type Props = Pick<RecentJob, "problem" | "service" | "location">;

export function JobDetailHero({ problem, service, location }: Props) {
  return (
    <PageHero
      src="/service-hero.jpg"
      alt={
        service && location
          ? `${service} in ${location} by Margus Appliance`
          : "Professional appliance repair services by Margus Appliance"
      }
      heading={problem ?? "Appliance Repair Job"}
      eyebrow={service && location ? `${service} in ${location}` : undefined}
    />
  );
}
