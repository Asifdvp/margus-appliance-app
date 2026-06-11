import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { cn } from "@/shared/lib/utils";
import { formatDateShort } from "@/shared/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  full?: boolean;
}

export function BlogCard({ post, className, full = false }: BlogCardProps) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden rounded-2xl"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className={cn(
            "relative bg-gray-100",
            full
              ? "w-full aspect-3/2"
              : "w-81.5 h-60 lg:w-102.75 lg:h-80",
          )}
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes={full ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 411px, 326px"}
              className="rounded-[16px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
          )}
        </div>
      </Link>

      <div className="mt-3 md:mt-5 space-y-1">
        <time dateTime={post.date} className="block text-xs leading-5 md:text-base md:leading-6 text-secondary font-manrope">
          {formatDateShort(post.date)}
        </time>
        <h3 className="mt-2 font-work-sans text-base leading-6 font-bold lg:text-[20px] lg:leading-7 text-dark">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            {post.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
