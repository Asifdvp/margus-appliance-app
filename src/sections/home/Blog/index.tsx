import { blogPosts } from "@/content/blog";
import { BlogCard } from "@/shared/ui/BlogCard";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/layout/Container";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 bg-white lg:py-20" aria-labelledby="blog-heading">
      <Container>
        {/* Header */}
        <div className="mb-8 lg:mb-10 lg:flex lg:items-center lg:justify-between">
          <h2
            id="blog-heading"
            className="font-work-sans font-bold text-dark text-[24px] leading-8 lg:text-[40px] lg:leading-12 lg:max-w-sm"
          >
            Appliance Repair Tips &amp; Expert Guides
          </h2>

          {/* Desktop CTA — hidden on mobile */}
          <Button href="/blog" className="hidden lg:inline-flex shrink-0">
            Read All Appliance Repair Guides ↗
          </Button>
        </div>

        {/* Mobile: horizontal snap carousel | Desktop: 3-col grid */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              className="snap-start shrink-0 w-[78vw] sm:w-[55vw] lg:w-auto lg:shrink"
            />
          ))}
        </div>

        {/* Mobile CTA — hidden on desktop */}
        <div className="mt-8 lg:hidden">
          <Button href="/blog" className="w-full">
            Read All Appliance Repair Guides ↗
          </Button>
        </div>
      </Container>
    </section>
  );
}
