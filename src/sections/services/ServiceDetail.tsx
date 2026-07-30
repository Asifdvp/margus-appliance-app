import type { Service } from "@/types";
import { ServiceHero } from "@/sections/services/ServiceHero";
import { ServiceContent } from "@/sections/services/ServiceContent";
import { AboutFeatures } from "@/sections/shared/AboutFeatures";
import { WhyChooseUs } from "@/sections/shared/WhyChooseUs";
import { FAQ } from "@/sections/shared/FAQ";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { service: Service };

export function ServiceDetail({ service }: Props) {
  return (
    <>
      <ServiceHero
        title={service.heroTitle ?? service.title}
        badges={service.badges}
      />
      <ServiceContent service={service} />
      <AboutFeatures />
      <WhyChooseUs />
      {service.faqs && service.faqs.length > 0 && (
        <FAQ items={service.faqs} heading="Frequently Asked Questions" />
      )}
      <Blogs />
      <CTABanner />
    </>
  );
}
