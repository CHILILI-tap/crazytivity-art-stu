"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Artwork } from "@/lib/types";
import { ButtonLink } from "@/components/ui/Button";

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  // Lock body scroll + Escape key
  useEffect(() => {
    if (!artwork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [artwork, onClose]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${artwork.title} artwork details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:border-terracotta hover:text-terracotta md:right-8 md:top-8"
          >
            <span className="sr-only">Close</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.25"
              />
            </svg>
          </button>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto grid h-full max-w-editorial gap-8 overflow-y-auto px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24"
          >
            {/* Image */}
            <div className="md:col-span-7">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft md:aspect-[5/6]">
                <Image
                  src={artwork.image}
                  alt={`${artwork.title}  ${artwork.medium}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-5 md:pt-4">
              <p className="eyebrow text-terracotta mb-4">
                {artwork.category}
              </p>
              <h2 className="display text-4xl leading-[1.02] md:text-5xl">
                {artwork.title}
              </h2>

              <dl className="mt-8 space-y-4 border-t border-ivory/10 pt-8 text-sm">
                <Row label="Year" value={artwork.year} />
                <Row label="Medium" value={artwork.medium} />
                <Row label="Dimensions" value={artwork.dimensions} />
                <Row label="Status" value={artwork.status} />
                <Row label="Price" value={artwork.price} />
              </dl>

              <p className="mt-8 text-ivory/70 md:text-base">
                {artwork.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary">
                  Inquire About This Piece
                </ButtonLink>
                <ButtonLink href="/commissions" variant="ghost">
                  Commission Similar
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ivory/8 pb-3">
      <dt className="text-[0.68rem] uppercase tracking-widest2 text-ivory/50">
        {label}
      </dt>
      <dd className="text-right text-ivory/90">{value}</dd>
    </div>
  );
}