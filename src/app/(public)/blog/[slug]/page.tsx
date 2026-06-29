import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { BlogDetailHero } from "@/sections/blog/BlogDetailHero";
import { BlogDetailContent } from "@/sections/blog/BlogDetailContent";
import { BlogDetailRelated } from "@/sections/blog/BlogDetailRelated";
import { CTABanner } from "@/sections/shared/CTABanner";

type Props = { params: Promise<{ slug: string }> };

function toISODate(dateStr: string): string {
  // Converts "DD.MM.YYYY" → "YYYY-MM-DDT00:00:00Z"
  const [day, month, year] = dateStr.split(".");
  return `${year}-${month}-${day}T00:00:00Z`;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt ?? post.title;
  const ogImage = post.coverImage ?? "/images/blogs/blog.jpg";

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://margusappliance.com/blog/${slug}`,
      type: "article",
      publishedTime: toISODate(post.date),
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    alternates: {
      canonical: `https://margusappliance.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? post.title,
    datePublished: toISODate(post.date),
    dateModified: toISODate(post.date),
    url: `https://margusappliance.com/blog/${slug}`,
    image: post.coverImage
      ? `https://margusappliance.com${post.coverImage}`
      : "https://margusappliance.com/images/blogs/blog.jpg",
    author: {
      "@type": "Organization",
      name: "Margus Appliance",
      url: "https://margusappliance.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://margusappliance.com/#organization",
      name: "Margus Appliance",
      logo: {
        "@type": "ImageObject",
        url: "https://margusappliance.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://margusappliance.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <BlogDetailRelated currentSlug={slug} />
      <CTABanner />
    </>
  );
}
