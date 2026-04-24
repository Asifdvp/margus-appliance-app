import type { Metadata } from "next";
import { BlogList } from "@/sections/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog | Margus Appliance",
  description: "Tips, guides, and news from Margus Appliance",
};

export default function BlogPage() {
  return <BlogList />;
}
