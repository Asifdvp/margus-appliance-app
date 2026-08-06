import { PageHero } from "@/shared/ui/PageHero";
import type { RecentJob } from "@/types";

type Props = Pick<
  RecentJob,
  "problem" | "service" | "location" | "heroTitle" | "badges"
>;

export function JobDetailHero({
  problem,
  service,
  location,
  heroTitle,
  badges,
}: Props) {
  return (
    <PageHero
      src="/service-hero.jpg"
      alt={
        service && location
          ? `${service} in ${location} by Margus Appliance`
          : "Professional appliance repair services by Margus Appliance"
      }
      heading={heroTitle ?? problem ?? "Appliance Repair Job"}
      eyebrow={location ? `Recent Job · ${location}, OH` : "Recent Job"}
      badges={badges}
    />
  );
}
