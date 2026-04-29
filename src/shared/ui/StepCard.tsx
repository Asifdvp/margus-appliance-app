import { cn } from "../lib/utils";

type StepCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function StepCard({
  icon,
  title,
  description,
}: StepCardProps) {
  return (
     <div
      className={cn(
        "group flex flex-col rounded-xl  bg-[#F6F6F6] py-6 px-4 lg:p-6 min-h-56  lg:min-h-90  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
      )}
    >
      <div className="shrink-0 flex items-start justify-start w-12 h-12 lg:w-16 lg:h-16 mb-5">
        {icon}
      </div>

      <div className="flex-1" />

      <h3 className="mb-2 lg:mb-3 font-work-sans text-[20px] font-bold leading-7 text-dark lg:text-[24px] lg:leading-7.5">
        {title}
      </h3>
      <p className="font-manrope text-[14px] leading-5.5 text-secondary lg:text-[16px] lg:leading-6">
        {description}
      </p>
       </div>
  );
}
