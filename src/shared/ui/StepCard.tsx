import Image, { type StaticImageData } from "next/image";
import { cn } from "../lib/utils";

type StepCardProps = {
  icon?: React.ReactNode;
  iconSrc?: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

export function StepCard({ icon, iconSrc, title, description, className }: StepCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-[#F6F6F6] p-4 md:p-6",
        className,
      )}
    >
      {/* Mobile: icon + title yan-yana | Desktop: üst-üstə */}
      <div className="flex items-center gap-0.5 md:flex-col md:items-start md:gap-0 md:mb-1">
        <div className="shrink-0 w-9 h-9 md:w-16.5 md:h-16 md:mb-13.5">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt=""
              aria-hidden="true"
              width={66}
              height={66}
              className="w-full h-full object-contain"
            />
          ) : (
            icon
          )}
        </div>
        <h3 className="md:mb-5 font-work-sans text-[14px] font-bold leading-4.5 text-dark md:text-[24px] md:leading-7.5">
          {title}
        </h3>
      </div>

      <p className="font-normal font-manrope text-[12px] leading-4.5 text-secondary md:text-[16px] md:leading-6">
        {description}
      </p>
    </div>
  );
}
