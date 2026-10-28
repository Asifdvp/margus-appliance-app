import { ALL_SERVICE_AREAS } from "@/content/service-areas";

const PARMA_COORDS = ALL_SERVICE_AREAS.find((a) => a.name === "Parma")?.coords;

/**
 * Straight-line distance in miles from the Parma shop to a named service
 * area, derived from the coordinates already in ALL_SERVICE_AREAS. Returns
 * null if the city isn't in that list (nothing is invented or assumed).
 */
export function milesFromParma(cityName: string): number | null {
  if (!PARMA_COORDS) return null;
  const city = ALL_SERVICE_AREAS.find((a) => a.name === cityName);
  if (!city) return null;

  const [lat1, lon1] = PARMA_COORDS;
  const [lat2, lon2] = city.coords;
  if (lat1 === lat2 && lon1 === lon2) return 0;

  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(distance * 10) / 10;
}
