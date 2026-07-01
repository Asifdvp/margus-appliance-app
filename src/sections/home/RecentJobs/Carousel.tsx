"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { JobCard } from "@/shared/ui/JobCard";
import type { RecentJob } from "@/types";

interface RowProps {
  jobs: RecentJob[];
  direction?: "forward" | "backward";
}

function JobRow({ jobs, direction = "forward" }: RowProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ startDelay: 0, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: false, direction })]
  );

  const items = [...jobs, ...jobs, ...jobs];

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="flex gap-4 lg:gap-6">
        {items.map((job, i) => (
          <div key={`${job.id}-${i}`} className="flex-none w-72 lg:w-[420px]">
            <JobCard {...job} href={`/jobs/${job.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface Props {
  jobs: RecentJob[];
  className?: string;
}

export function RecentJobsCarousel({ jobs, className }: Props) {
  return (
    <div className={`overflow-hidden min-w-0${className ? ` ${className}` : ""}`}>
      <JobRow jobs={jobs} direction="forward" />
    </div>
  );
}
