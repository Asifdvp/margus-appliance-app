export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category?: string;
  coverImage?: string;
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
