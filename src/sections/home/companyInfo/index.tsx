import { Container } from "@/shared/layout/Container";
import Image from "next/image";


interface FlexItemProps {
  icon: string;
  title: string;
  description: string;
}

function FlexItem({ icon, title, description }: FlexItemProps) {
  return (
    <div className="flex flex-col gap-0.5 flex-1 min-w-0 items-center text-center">
      <div className="relative w-7.5 h-7.5 md:w-24.5 md:h-24.5 shrink-0 ">
        <Image
          src={icon}
          alt={title}
          fill
          sizes="(min-width: 768px) 98px, 30px"
          className="object-contain"
        />
      </div>
      <h3 className="font-bold text-xs leading-3.75 md:text-[22px] md:leading-7 font-work-sans text-dark">
        {title}
      </h3>
      <p className="text-[10px] font-manrope leading-3.5 md:text-[18px] md:leading-7 text-secondary">
        {description}
      </p>
    </div>
  );
}

const ITEMS: FlexItemProps[] = [
  {
    icon: "/same-day.png",
    title: "Same-Day Service",
    description: "Emergency repairs, 7 days a week.",
  },
  {
    icon: "/one-visit.png",
    title: "One Visit Repairs",
    description: "Most repairs completed on the first visit.",
  },
  {
    icon: "/honest-pricing.png",
    title: "Honest Pricing",
    description: "No hidden fees. Upfront, transparent prices.",
  },
  {
    icon: "/licensed.png",
    title: "Licensed and Insured",
    description: "Professional Service Packed by 90-day Warranty.",
  },
];

const CompanyInfo = () => {
  return (
    <section className="py-2 md:py-8">
      <Container>
        <div className="bg-[#F6F6F6] rounded-3xl py-2  md:pt-4 md:pb-5 md:px-10">
          <div className="grid grid-cols-4 gap-x-2.5 md:gap-x-10">
            {ITEMS.map((item) => (
              <FlexItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyInfo;
