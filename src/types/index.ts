export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  detailImage?: string;
  intro?: string[];
  commonProblems?: string[];
  whyChoosePoints?: string[];
  closingHeading?: string;
  closingText?: string[];
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
