"use client";

import { useMemo, useState } from "react";
import { artworks } from "@/data/artworks";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import ArtworkModal from "@/components/artwork/ArtworkModal";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Artwork } from "@/lib/types";

type SortKey = "newest" | "price-low" | "price-high";

function parsePrice(p: string): number {
  const n = Number(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function AvailablePage() {
  const [sort, setSort] = useState<SortKey>("newest");
  const [active, setActive] = useState<Artwork | null>(null);

  const available = useMemo(() => {
    const list = artworks.filter((a) => a.status === "Available");
    const sorted = [...list];
    if (sort === "newest") {
      sorted.sort((a, b) => Number(b.year) - Number(a.year));
    } else if (sort === "price-low") {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sort === "price-high") {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return sorted;
  }, [sort]);

  const sortOptions: { key: SortKey; label: string }[] = [
    { key: "newest", label: "Newest" },
    { key: "price-low", label: "Price: Low → High" },
    { key: "price-high", label: "Price: High → Low" },
  ];

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-editorial px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">Available Now</p>
          <h1 className="display max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
            Take home an
            <br />
            <em className="italic text-ivory/70">original.</em>
          </h1>
          <p className="mt-8 max-w-prose2 text-ivory/70 md:text-lg">
            Original paintings currently available for purchase. Each piece is
            one of one painted, signed, and shipped directly from the studio.
            To purchase or reserve, send an inquiry and we&apos;ll take it from
            there.
          </p>
        </Reveal>
      </section>

      {/* Sort bar */}
      <section className="sticky top-0 z-30 border-y border-ivory/10 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-editorial items-center gap-2 overflow-x-auto px-5 py-4 md:px-8">
          <span className="shrink-0 pr-3 text-[0.68rem] uppercase tracking-widest2 text-ivory/50">
            Sort
          </span>
          {sortOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setSort(opt.key)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-widest2 transition-all duration-300",
                sort === opt.key
                  ? "border-terracotta bg-terracotta text-ivory"
                  : "border-ivory/20 text-ivory/70 hover:border-ivory/50 hover:text-ivory"
              )}
              aria-pressed={sort === opt.key}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 self-center text-[0.68rem] uppercase tracking-widest2 text-ivory/40 md:block">
            {available.length} available
          </span>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-editorial px-5 py-12 md:px-8 md:py-20">
        {available.length === 0 ? (
          <div className="py-24 text-center">
            <p className="display text-3xl md:text-4xl">All sold out.</p>
            <p className="mt-4 text-ivory/60">
              New work is added regularly or you can commission a piece.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((art, i) => (
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

      {/* Payment / shipping note */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto grid max-w-editorial gap-10 px-5 py-20 md:grid-cols-3 md:px-8 md:py-24">
          {[
            {
              title: "One of One",
              body: "Every painting is an original. No prints, no reproductions the piece you see is the piece you receive.",
            },
            {
              title: "Secure Inquiry",
              body: "Send an inquiry and we'll arrange payment, invoicing, and shipping directly. No automated checkout real conversation first.",
            },
            {
              title: "Shipped With Care",
              body: "Each work is professionally packed and fully insured. Delivery can be arranged worldwide.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border-t border-ivory/15 pt-6">
                <p className="eyebrow text-terracotta mb-3">{item.title}</p>
                <p className="text-sm leading-relaxed text-ivory/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </>
  );
}