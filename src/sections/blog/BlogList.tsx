import { blogPosts } from "@/content/blog";
import { BlogCard } from "@/shared/ui/BlogCard";
import { PageWrapper } from "@/shared/layout/PageWrapper";

export function BlogList() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-zinc-600">Tips, guides, and news from our team.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </PageWrapper>
  );
}
