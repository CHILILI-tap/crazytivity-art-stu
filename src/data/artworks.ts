import type { Artwork } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR ARTWORK 14 paintings
 *
 *  Titles, prices, and descriptions below are placeholders.
 *  Edit them as you like the site updates automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const artworks: Artwork[] = [
  {
    slug: "painting-01",
    title: "Untitled I",
    image: "/images/artwork/painting-01.jpg",
    year: "2026",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "Abstract",
    tags: ["Featured"],
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
    featured: true,
  },
  {
    slug: "painting-02",
    title: "Untitled II",
    image: "/images/artwork/painting-02.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-03",
    title: "Untitled III",
    image: "/images/artwork/painting-03.jpg",
    year: "2026",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "Abstract",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-04",
    title: "Untitled IV",
    image: "/images/artwork/painting-04.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-05",
    title: "Untitled V",
    image: "/images/artwork/painting-05.jpg",
    year: "2026",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "Abstract",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-06",
    title: "Untitled VI",
    image: "/images/artwork/painting-06.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-07",
    title: "Untitled VII",
    image: "/images/artwork/painting-07.jpg",
    year: "2026",
    medium: "Mixed media",
    dimensions: "24 × 36 inches",
    category: "Mixed Media",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-08",
    title: "Untitled VIII",
    image: "/images/artwork/painting-08.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-09",
    title: "Untitled IX",
    image: "/images/artwork/painting-09.jpg",
    year: "2026",
    medium: "Mixed media",
    dimensions: "24 × 36 inches",
    category: "Mixed Media",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-10",
    title: "Untitled X",
    image: "/images/artwork/painting-10.jpg",
    year: "2026",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "Abstract",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-11",
    title: "Untitled XI",
    image: "/images/artwork/painting-11.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-12",
    title: "Untitled XII",
    image: "/images/artwork/painting-12.jpg",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "24 × 36 inches",
    category: "Portraits",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-13",
    title: "Untitled XIII",
    image: "/images/artwork/painting-13.jpg",
    year: "2026",
    medium: "Mixed media",
    dimensions: "24 × 36 inches",
    category: "Mixed Media",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
  {
    slug: "painting-14",
    title: "Untitled XIV",
    image: "/images/artwork/painting-14.jpg",
    year: "2026",
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "Abstract",
    description: "A short description of this painting.",
    price: "Price on Request",
    status: "Available",
  },
];

export const artworkCategories = [
  "Featured",
  "Abstract",
  "Portraits",
  "Contemporary",
  "Mixed Media",
] as const;

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeatured(): Artwork[] {
  return artworks.filter((a) => a.featured);
}

export function getAvailable(): Artwork[] {
  return artworks.filter((a) => a.status === "Available");
}