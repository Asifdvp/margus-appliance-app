import Image from "next/image";
import type { RecentJob } from "@/types";
import PointIcon from "@/shared/icons/point.svg";
import DateIcon from "@/shared/icons/date.svg";
import JobsIcon from "@/shared/icons/jobs.svg";

export function JobCard({ image, alt, service, location, date, problem }: RecentJob) {
  return (
    <article className="flex flex-col">
      {/* Image + service badge */}
      <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {service && (
          <span className="absolute bottom-3 left-3 bg-white text-dark font-manrope font-medium text-xs leading-4.5 px-3 py-1.5 rounded-xl">
            {service}
          </span>
        )}
      </div>

      {/* Info rows */}
      <div className="mt-4 flex flex-col gap-2.5">
        {location && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1.5 shrink-0 font-manrope text-xs md:text-sm text-secondary">
              <PointIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
              Location
            </span>
            <span className="font-manrope text-xs md:text-sm text-dark font-medium text-right">
              {location}
            </span>
          </div>
        )}

        {date && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1.5 shrink-0 font-manrope text-xs md:text-sm text-secondary">
              <DateIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
              Date
            </span>
            <span className="font-manrope text-xs md:text-sm text-dark font-medium text-right">
              {date}
            </span>
          </div>
        )}

        {problem && (
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1.5 shrink-0 font-manrope text-xs md:text-sm text-secondary">
              <JobsIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
              Problem
            </span>
            <span className="font-manrope text-xs md:text-sm text-dark font-medium text-right max-w-[60%]">
              {problem}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
