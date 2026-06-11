import Image from "next/image";
import Link from "next/link";
import type { RecentJob } from "@/types";
import PointIcon from "@/shared/icons/jobs/point.svg";
import DateIcon from "@/shared/icons/jobs/date.svg";
import JobsIcon from "@/shared/icons/jobs/problem.svg";

type Props = RecentJob & { href?: string };

export function JobCard({
  image,
  alt,
  service,
  location,
  date,
  problem,
  href,
}: Props) {
  const inner = (
    <>
      {/* Image + service badge */}
      <div className="relative w-full h-70 rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {service && (
          <span className="absolute bottom-4 left-4 bg-white text-dark font-manrope font-semibold text-xs leading-5 px-2 py-1 rounded-xl md:text-sm md:leading-6">
            {service}
          </span>
        )}
      </div>

      {/* Info rows */}
      <div className="mt-3 flex flex-col gap-2">
        {location && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1 shrink-0 font-manrope text-xs leading-5 md:text-sm text-grey">
              <PointIcon className="w-3.5 h-3.5 md:h-5 md:w-5 shrink-0" aria-hidden="true" />
              Location
            </span>
            <span className="max-w-[54%] font-manrope text-xs leading-5 md:text-base md:leading-6 text-dark font-normal text-right">
              {location}
            </span>
          </div>
        )}

        {date && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1 shrink-0 font-manrope text-xs leading-5 md:text-sm text-grey">
              <DateIcon className="w-3.5 h-3.5 md:h-5 md:w-5 shrink-0" aria-hidden="true" />
              Date
            </span>
            <span className="max-w-[54%] font-manrope text-xs leading-5 md:text-base md:leading-6 text-dark font-normal text-right">
              {date}
            </span>
          </div>
        )}

        {problem && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1 shrink-0 font-manrope text-xs leading-5 md:text-sm text-grey">
              <JobsIcon className="w-3.5 h-3.5 md:h-5 md:w-5 shrink-0" aria-hidden="true" />
              Problem
            </span>
            <span className="max-w-[54%] font-manrope text-xs leading-5 md:text-base md:leading-6 text-dark font-normal text-right">
              {problem}
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex flex-col">
        {inner}
      </Link>
    );
  }

  return <article className="flex flex-col">{inner}</article>;
}
