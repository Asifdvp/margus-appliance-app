import type { GoogleBusinessData } from "@/types";

const SERPAPI_URL = "https://serpapi.com/search.json";
const REVALIDATE_SECONDS = 60 * 60 * 24; // once a day — rating/review count change slowly

type SerpApiReview = {
  review_id: string;
  rating: number;
  snippet?: string;
  date?: string;
  user?: {
    name?: string;
    thumbnail?: string;
  };
};

type SerpApiReviewsResponse = {
  error?: string;
  place_info?: {
    rating: number;
    reviews: number;
  };
  reviews?: SerpApiReview[];
};

/**
 * Fetches live rating + reviews for the business from SerpApi's Google Maps
 * Reviews API. Returns null (never throws) when credentials are missing or
 * the request fails, so callers can fall back to static content.
 */
export async function getGoogleBusinessData(): Promise<GoogleBusinessData | null> {
  const apiKey = process.env.SERPAPI_API_KEY;
  const placeId = process.env.SERPAPI_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const url = `${SERPAPI_URL}?engine=google_maps_reviews&place_id=${encodeURIComponent(placeId)}&hl=en&api_key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;

    const data = (await res.json()) as SerpApiReviewsResponse;
    if (data.error || !data.place_info) return null;

    const reviews = (data.reviews ?? [])
      .filter((r) => !!r.snippet?.trim())
      .map((r) => ({
        id: r.review_id,
        author: r.user?.name ?? "Google User",
        authorPhoto: r.user?.thumbnail,
        rating: r.rating,
        text: r.snippet!.trim(),
        relativeDate: r.date ?? "",
      }));

    return {
      rating: data.place_info.rating,
      reviewCount: data.place_info.reviews,
      reviews,
    };
  } catch {
    return null;
  }
}
