import { PageHero } from "@/shared/ui/PageHero";

type Props = { title: string; badges?: string[] };

export function ServiceHero({ title, badges }: Props) {
  return (
    <PageHero
      src="/service-hero.jpg"
      alt="Professional appliance repair services by Margus Appliance"
      heading={title}
      badges={badges}
    />
  );
}
