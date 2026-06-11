"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { BlogCard } from "@/shared/ui/BlogCard";
import type { BlogPost } from "@/types";

interface Props {
  posts: BlogPost[];
  className?: string;
}

export function BlogsCarousel({ posts, className }: Props) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        startDelay: 0,
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const items = [...posts, ...posts, ...posts];

  return (
    <div
      className={`overflow-hidden cursor-grab active:cursor-grabbing${className ? ` ${className}` : ""}`}
      ref={emblaRef}
    >
      <div className="flex">
        {items.map((post, i) => (
          <div key={`${post.id}-${i}`} className="flex-none w-81.5 mr-5">
            <BlogCard post={post} className="w-81.5" />
          </div>
        ))}
      </div>
    </div>
  );
}
