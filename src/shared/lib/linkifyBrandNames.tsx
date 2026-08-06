import Link from "next/link";
import type { ReactNode } from "react";
import { brands } from "@/content/brands";

// Brands with an authored detail page — these are the only ones eligible
// to be turned into links. Mirrors the `intro`-presence gate used for
// /brands/[slug] routing, so this list updates itself as brand pages
// are added without touching any call site.
const LINKABLE_BRANDS = brands.filter((b) => b.intro);

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Renders `text` with any mentioned brand name (that has its own detail
 * page) turned into a link to that page. Everything else is left as plain
 * text.
 */
export function linkifyBrandNames(text: string): ReactNode {
  if (LINKABLE_BRANDS.length === 0) return text;

  const pattern = new RegExp(
    `\\b(${LINKABLE_BRANDS.map((b) => escapeRegExp(b.name)).join("|")})\\b`,
    "g",
  );

  return text.split(pattern).map((part, i) => {
    const brand = LINKABLE_BRANDS.find((b) => b.name === part);
    if (!brand) return part;
    return (
      <Link
        key={i}
        href={`/brands/${brand.id}`}
        className="font-semibold text-brand hover:underline"
      >
        {part}
      </Link>
    );
  });
}
