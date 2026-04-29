import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { cn } from "@/shared/lib/utils";
import { formatDateShort } from "@/shared/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden rounded-2xl"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="relative w-[326px] h-[220px] lg:w-[411px] lg:h-[320px] bg-gray-100">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 411px, 326px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
          )}
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <time dateTime={post.date} className="block text-sm text-gray-500">
          {formatDateShort(post.date)}
        </time>
        <h3 className="font-manrope text-base font-bold leading-snug text-dark">
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
