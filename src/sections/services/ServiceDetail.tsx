import type { Service } from "@/types";
import { ServiceHero } from "@/sections/services/ServiceHero";
import { ServiceContent } from "@/sections/services/ServiceContent";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { service: Service };

export function ServiceDetail({ service }: Props) {
  return (
    <>
      <ServiceHero title={service.title} />
      <ServiceContent service={service} />
      <Blogs />
      <CTABanner />
    </>
  );
}
