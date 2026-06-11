"use client";

import { useState } from "react";
import { Container } from "@/shared/layout/Container";
import { JobCard } from "@/shared/ui/JobCard";
import { RECENT_JOBS } from "@/content/recent-jobs";
import { cn } from "@/shared/lib/utils";

const ALL = "All Jobs";

const FILTERS = [
  ALL,
  "Refrigerator Repair",
  "Washer Repair",
  "Dryer Repair",
  "Oven & Stove Repair",
  "Dishwasher Repair",
  "Freezer Repair",
  "Kitchen Appliance Repair",
  "Ice Maker Repair",
];

export function AllJobsGrid() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL
      ? RECENT_JOBS
      : RECENT_JOBS.filter((job) => job.service === active);

  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8 lg:mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "px-4 py-2 rounded-xl font-manrope text-xs lg:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                active === filter
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-dark hover:bg-gray-200",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Job cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filtered.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <p className="font-manrope text-sm text-secondary text-center py-16">
            No jobs found for this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
