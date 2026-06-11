import { PageHero } from "@/shared/ui/PageHero";
import type { RecentJob } from "@/types";

type Props = Pick<RecentJob, "problem" | "image" | "alt">;

export function JobDetailHero({ problem, image, alt }: Props) {
  return (
    <PageHero
      src={image}
      alt={alt}
      heading={problem ?? "Appliance Repair Job"}
    />
  );
}
