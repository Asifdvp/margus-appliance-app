import type { Brand } from "@/types";
import { BrandHero } from "@/sections/brands/BrandHero";
import { BrandContent } from "@/sections/brands/BrandContent";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { AboutFeatures } from "@/sections/shared/AboutFeatures";
import { WhyChooseUs } from "@/sections/shared/WhyChooseUs";
import { FAQ } from "@/sections/shared/FAQ";
import { OtherBrands } from "@/sections/shared/OtherBrands";
import { Blogs } from "@/sections/shared/Blogs";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { brand: Brand };

export function BrandDetail({ brand }: Props) {
  return (
    <>
      <BrandHero
        title={brand.heroTitle ?? `${brand.name} Appliance Repair`}
        badges={brand.badges}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />
      <BrandContent brand={brand} />
      <AboutFeatures />
      <WhyChooseUs />
      {brand.faqs && brand.faqs.length > 0 && (
        <FAQ items={brand.faqs} heading="Frequently Asked Questions" />
      )}
      <OtherBrands currentId={brand.id} />
      <Blogs />
      <CTABanner />
    </>
  );
}
