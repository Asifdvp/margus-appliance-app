import type { BlogPost } from "@/types";
import { BlogCard } from "@/shared/ui/BlogCard";
import { BlogsCarousel } from "@/shared/ui/BlogsCarousel";

interface Props {
  posts: BlogPost[];
}

export function BlogsGrid({ posts }: Props) {
  return (
    <>
      {/* Mobile: auto-scroll carousel */}
      <div className="lg:hidden -mx-4 sm:-mx-6">
        <BlogsCarousel posts={posts} />
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
