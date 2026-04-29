import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import StarIcon from "@/shared/icons/star.svg";
const StarRating = () => {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <div className="flex shrink-0" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "relative h-11 w-11 lg:h-13 lg:w-13 overflow-hidden rounded-full border-[1.5px] border-white bg-zinc-200",
              i > 1 && "-ml-3",
            )}
          >
            <Image
              src={`/images/jobs/job-${i}.png`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div>
        <div
          className="flex items-start flex-col gap-0.5 "
          aria-label="Rated 4.9 out of 5 stars"
        >
          <p className="text-[13px] font-semibold leading-5 font-manrope lg:text-[16px] lg:leading-5.5  text-grey ">
            4.9/5 — 600+ Google Reviews
          </p>

          <div className="flex  gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
