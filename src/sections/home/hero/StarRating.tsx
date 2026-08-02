import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import StarIcon from "@/shared/icons/star.svg";
import { testimonials } from "@/content/testimonials";

interface Props {
  rating: number;
  reviewCount: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_NAMES = testimonials.slice(0, 3).map((t) => t.name);

const StarRating = ({ rating, reviewCount }: Props) => {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <div className="flex shrink-0" aria-hidden="true">
        {AVATAR_NAMES.map((name, i) => (
          <div
            key={name}
            className={cn(
              "relative flex h-8 w-8 lg:h-13 lg:w-13 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-white bg-brand font-work-sans text-[10px] font-bold text-white lg:text-base",
              i > 0 && "-ml-3",
            )}
          >
            {getInitials(name)}
          </div>
        ))}
      </div>

      <div>
        <div
          className="flex items-start flex-col gap-0.5 "
          aria-label={`Rated ${rating.toFixed(1)} out of 5 stars`}
        >
          <p className="text-[13px] leading-4.5 font-medium font-manrope lg:text-[16px] lg:leading-5.5 lg:font-regular text-grey ">
            {rating.toFixed(1)}/5 — {reviewCount.toLocaleString("en-US")}+ Google Reviews
          </p>

          <div className="flex  gap-0.7 md:gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

<div className="md:hidden ml-auto">
  <Image
    src="/rate.png"
    alt="Google Reviews badge"
    width={96}
    height={64}
    className="object-contain"
  />
</div>

    </div>
  );
};

export default StarRating;
