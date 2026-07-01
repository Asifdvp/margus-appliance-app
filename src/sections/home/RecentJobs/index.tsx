import { RECENT_JOBS } from "@/content/recent-jobs";
import { Container } from "@/shared/layout/Container";
import { RecentJobsCarousel } from "./Carousel";
import RightArrowIcon from "@/shared/icons/right-arrow.svg";
import Link from "next/link";

export function RecentJobs() {
  return (
    <section
      className="py-10.5 lg:py-24  bg-white"
      aria-labelledby="recent-jobs-heading"
    >
      <Container>
        <div className=" mb-4 lg:mb-14 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <h2
            id="recent-jobs-heading"
            className="font-work-sans font-bold text-dark text-[18px] leading-6 lg:text-[48px] lg:leading-14"
          >
            Recent Appliance Repair Jobs
          </h2>
          <div className="hidden lg:flex">
            <Link
              href="/jobs"
              className="w-full rounded-xl bg-brand px-4 py-4 text-[18px] leading-7 font-semibold text-white hover:bg-brand/90 flex items-center justify-center gap-1"
            >
              See all jobs <RightArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>

      <Container>
        <RecentJobsCarousel jobs={RECENT_JOBS} />
      </Container>

      <Container>
        <div className="lg:hidden mt-4">
          <Link
            href="/jobs"
            className="w-full rounded-xl bg-brand px-4 py-3 text-[14px] leading-5.5 font-semibold text-white hover:bg-brand/90 flex items-center justify-center gap-1"
          >
            See all jobs <RightArrowIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
