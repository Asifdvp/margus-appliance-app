import { PageHero } from "@/shared/ui/PageHero";

type Props = { title: string };

export function ServiceHero({ title }: Props) {
  return (
    <PageHero
      src="/service-hero.jpg"
      alt="Professional appliance repair services by Margus Appliance"
      heading={title}
    />
  );
}
