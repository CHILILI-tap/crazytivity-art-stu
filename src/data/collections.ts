import type { Collection } from "@/lib/types";
import { artworks } from "./artworks";

export const collections: Collection[] = [
  {
    slug: "earth-and-ember",
    name: "Earth & Ember",
    cover:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
    description:
      "Paintings made from the colors of late summer terracotta, ash, and the last of the light.",
  },
  {
    slug: "quiet-figures",
    name: "Quiet Figures",
    cover:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1600&q=80",
    description:
      "Portraits of people who are not quite looking at us. Made from memory, imagined, and half-remembered faces.",
  },
  {
    slug: "surfaces-and-silences",
    name: "Surfaces & Silences",
    cover:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=80",
    description:
      "Mixed-media works about texture as language what a wall says when nobody is talking to it.",
  },
];

export function getArtworksForCollection(collectionSlug: string) {
  const map: Record<
    string,
    (cat: string, tags: string[]) => boolean
  > = {
    "earth-and-ember": (cat, tags) =>
      cat === "Abstract" ||
      tags.includes("Abstract") ||
      tags.includes("Featured"),
    "quiet-figures": (cat) => cat === "Portraits",
    "surfaces-and-silences": (cat, tags) =>
      cat === "Mixed Media" ||
      cat === "Contemporary" ||
      tags.includes("Contemporary"),
  };
  const test = map[collectionSlug];
  if (!test) return [];
  return artworks.filter((a) => test(a.category, a.tags ?? []));
}

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}