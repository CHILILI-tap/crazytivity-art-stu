"use client";

import { useMemo, useState } from "react";
import { artworks, artworkCategories } from "@/data/artworks";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import ArtworkModal from "@/components/artwork/ArtworkModal";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Artwork, ArtworkCategory } from "@/lib/types";

type Filter = "All" | ArtworkCategory;

export default function ArtPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Artwork | null>(null);

  const filters: Filter[] = ["All", ...artworkCategories];

  const filtered = useMemo(() => {
    if (filter === "All") return artworks;
    return artworks.filter(
      (a) => a.category === filter || (a.tags ?? []).includes(filter)
    );
  }, [filter]);

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-editorial px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">The Gallery</p>
          <h1 className="display max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
            Every painting is a
            <br />
            <em className="italic text-ivory/70">conversation.</em>
          </h1>
          <p className="mt-8 max-w-prose2 text-ivory/70 md:text-lg">
            A living archive of original works abstracts, portraits, mixed
            media, and commissions. Filter by mood or medium, then click any
            piece to see it in full.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-30 border-y border-ivory/10 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-editorial gap-2 overflow-x-auto px-5 py-4 md:px-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-widest2 transition-all duration-300",
                filter === f
                  ? "border-terracotta bg-terracotta text-ivory"
                  : "border-ivory/20 text-ivory/70 hover:border-ivory/50 hover:text-ivory"
              )}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 self-center text-[0.68rem] uppercase tracking-widest2 text-ivory/40 md:block">
            {filtered.length} {filtered.length === 1 ? "work" : "works"}
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-editorial px-5 py-12 md:px-8 md:py-20">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-ivory/60">
            No works match this filter yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((art, i) => (
              <Reveal key={art.slug} delay={(i % 3) * 0.08}>
                <ArtworkCard
                  artwork={art}
                  priority={i < 3}
                  onClick={setActive}
                />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </>
  );
}