import { blogPosts } from "@/content/blog";
import { Card } from "@/shared/ui/Card";
import { PageWrapper } from "@/shared/layout/PageWrapper";
import { formatDate } from "@/shared/lib/utils";

export function BlogList() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-zinc-600">
          Tips, guides, and news from our team.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id}>
            <Card className="h-full">
              {post.category && (
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  {post.category}
                </span>
              )}
              <h2 className="mt-2 text-lg font-semibold leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-500">{post.excerpt}</p>
              <p className="mt-4 text-xs text-zinc-400">{formatDate(post.date)}</p>
            </Card>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
