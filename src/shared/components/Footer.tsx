import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/constants";
import { Container } from "@/shared/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/[.08] bg-zinc-50 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold">{SITE_NAME}</p>
          <ul className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
}
