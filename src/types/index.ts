export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  detailImage?: string;
  heroTitle?: string;
  badges?: string[];
  intro?: string[];
  commonProblems?: string[];
  commonProblemsNote?: string;
  sections?: BlogSection[];
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
  intro?: string[];
  commonProblems?: string[];
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
  image?:string
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
