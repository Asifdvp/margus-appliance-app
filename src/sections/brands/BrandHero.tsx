import { PageHero } from "@/shared/ui/PageHero";

type Props = { title: string; badges?: string[] };

export function BrandHero({ title, badges }: Props) {
  return (
    <PageHero
      src="/service-hero.webp"
      alt="Professional appliance repair services by Margus Appliance"
      heading={title}
      badges={badges}
    />
  );
}
