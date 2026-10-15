"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick?: (artwork: Artwork) => void;
  priority?: boolean;
  /** Optional class for the outer wrapper (used to control grid spans). */
  className?: string;
}

export default function ArtworkCard({
  artwork,
  onClick,
  priority = false,
  className,
}: ArtworkCardProps) {
  const isSold = artwork.status === "Sold";

  return (
    <button
      type="button"
      onClick={() => onClick?.(artwork)}
      aria-label={`Open ${artwork.title} details`}
      className={cn(
        "group relative block w-full overflow-hidden bg-ink-soft text-left",
        className
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={artwork.image}
          alt={`${artwork.title} — ${artwork.medium}, ${artwork.dimensions}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]",
            isSold && "opacity-70 saturate-50"
          )}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90" />

        {/* Status pill */}
        <div className="absolute left-4 top-4">
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 text-[0.62rem] uppercase tracking-widest2",
              artwork.status === "Available" &&
                "bg-terracotta text-ivory",
              artwork.status === "Reserved" && "bg-gold text-ink",
              artwork.status === "Sold" && "bg-ivory/15 text-ivory",
              artwork.status === "Commission Only" &&
                "bg-burgundy text-ivory"
            )}
          >
            {artwork.status}
          </span>
        </div>

        {/* Hover cursor dot indicator */}
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-ivory/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="block h-1 w-1 rounded-full bg-ivory" />
        </div>

        {/* Bottom caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-[0.65rem] uppercase tracking-widest2 text-ivory/60">
            {artwork.year} · {artwork.medium}
          </p>
          <h3 className="display mt-2 text-xl leading-tight text-ivory md:text-2xl">
            {artwork.title}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-widest2 text-ivory/50">
            {artwork.dimensions}
          </p>
        </div>
      </div>

      {/* Under-card metadata row */}
      <div className="flex items-center justify-between border-t border-ivory/10 px-5 py-4 md:px-6">
        <span className="text-[0.68rem] uppercase tracking-widest2 text-ivory/70">
          {artwork.price}
        </span>
        <span className="text-[0.68rem] uppercase tracking-widest2 text-terracotta opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          View →
        </span>
      </div>
    </button>
  );
}