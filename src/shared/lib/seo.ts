export const SITE_URL = "https://margusappliancerepair.com";

/**
 * Builds a self-referential canonical/OG URL for a given path, with a
 * single, consistent trailing-slash convention for the whole site:
 * the homepage ends in "/" (its real URL), every other route does not
 * (matching next.config.ts's default trailingSlash: false). Fix the
 * convention here once and every page that calls this stays correct.
 */
export function canonicalUrl(path?: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}
