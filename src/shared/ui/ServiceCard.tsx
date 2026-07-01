import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  className?: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
  ctaLabel = "Let's Repair ↗",
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-xl bg-[#F6F6F6] p-3 lg:p-6 lg:h-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className,
      )}
    >
      {/* Mobile: icon + title yan-yana | Desktop: yalnız icon */}
      <div className="flex items-center justify-start gap-3 lg:block">
        <div className="relative shrink-0 w-12 h-12 lg:w-auto lg:h-32.5">
          <Image
            src={icon}
            alt={`${title} icon`}
            fill
            sizes="(min-width: 1024px) 130px, 48px"
            className="object-contain object-left"
          />
        </div>
        <h3 className="font-work-sans text-[15px] font-bold leading-5 text-dark lg:hidden">
          {title}
        </h3>
      </div>

      {/* Desktop spacer */}
      <div className="hidden lg:block flex-1 grow" />

      {/* Desktop title */}
      <h3 className="hidden lg:block mb-3 font-work-sans text-[24px] font-bold leading-7.5 text-dark">
        {title}
      </h3>

      <p className="mt-2 font-manrope text-[12px] leading-4.5 text-secondary lg:mt-3 lg:text-[16px] lg:leading-6">
        {description}
      </p>

      {/* CTA — desktop hover */}
      <div className="hidden lg:grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 lg:group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <span className="pt-3.5 inline-flex w-fit items-center font-manrope text-[13px] leading-5.5 font-semibold text-brand underline-offset-2 lg:text-[18px] lg:leading-7">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
