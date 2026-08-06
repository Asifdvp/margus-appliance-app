export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  detailImage?: string;
  heroTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  badges?: string[];
  intro?: string[];
  preProblemsSections?: BlogSection[];
  commonProblems?: string[];
  commonProblemsNote?: string;
  sections?: BlogSection[];
  brandsText?: string;
  whyChoosePoints?: string[];
  closingHeading?: string;
  closingText?: string[];
  faqs?: FaqItem[];
};
export type Step = {
  id: string;
  title: string;
  description: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  note?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  coverImage?: string;
  excerpt?: string;
  category?: string;
  content?: BlogSection[];
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
  heroTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  badges?: string[];
  intro?: string[];
  preProblemsSections?: BlogSection[];
  commonProblemsIntro?: string;
  commonProblems?: string[];
  commonProblemsNote?: string;
  sections?: BlogSection[];
  closingHeading?: string;
  closingText?: string[];
  faqs?: FaqItem[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type RecentJob = {
  id: string;
  /** SEO-friendly URL slug, e.g. "washer-repair-cleveland-heights". Used for /jobs/{slug}. */
  slug: string;
  image: string;
  alt: string;
  service?: string;
  location?: string;
  date?: string;
  problem?: string;
  /** Brand id (e.g. "subzero") — cross-linked to /brands/{id} only if that brand has a detail page. */
  brand?: string;
  heroTitle?: string;
  badges?: string[];
  metaTitle?: string;
  metaDescription?: string;
  intro?: string[];
  diagnosis?: string;
  repairAction?: string;
  result?: string;
  /** Lead-in sentence before the "Learn more about our services" link. Defaults to "Need the same kind of repair?" */
  learnMoreIntro?: string;
  /** Overrides the trailing ", or see our {brand} page" clause with custom text linking to /brands instead. */
  learnMoreSuffixText?: string;
  commonProblems?: string[];
  whyChooseHeading?: string;
  whyChoosePoints?: string[];
  closingHeading?: string;
  closingText?: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  text: string;
  name: string;
  location: string;
  image?: string;
  date?: string;
};

export type GoogleReview = {
  id: string;
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeDate: string;
};

export type GoogleBusinessData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
};
