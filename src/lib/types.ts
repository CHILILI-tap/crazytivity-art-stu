export type ArtworkStatus =
  | "Available"
  | "Sold"
  | "Reserved"
  | "Commission Only";

export type ArtworkCategory =
  | "Abstract"
  | "Portraits"
  | "Contemporary"
  | "Mixed Media"
  | "Featured";

export interface Artwork {
  slug: string;
  title: string;
  image: string;
  year: string;
  medium: string;
  dimensions: string;
  category: ArtworkCategory;
  tags?: ArtworkCategory[];
  description: string;
  price: string;
  status: ArtworkStatus;
  featured?: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  cover: string;
  description: string;
  artworks?: Artwork[];
}