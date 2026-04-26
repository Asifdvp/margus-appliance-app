import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type ServiceCardProps = {
  icon: React.ReactNode;
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
        "group flex flex-col rounded-xl border bg-[#F6F6F6] py-6 px-4 lg:p-6 h-56 lg:h-90 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className,
      )}
    >
      {/* Icon — top */}
      <div className="shrink-0 flex items-start justify-start w-12 h-12 lg:w-16 lg:h-16">
        {icon}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content */}
      <h3 className="mb-2 font-work-sans text-[20px] font-bold leading-7 text-dark lg:text-[24px] lg:leading-8">
        {title}
      </h3>

      <p className="font-manrope text-[14px] leading-5.5 text-[#535756] lg:text-[16px] lg:leading-6">
        {description}
      </p>

      {/* CTA — desktop hover-da açılır */}
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 lg:group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <span className="pt-4 inline-flex w-fit items-center font-manrope text-[13px] font-semibold text-brand underline-offset-2 lg:text-[14px]">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
