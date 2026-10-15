import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  collections,
  getCollection,
  getArtworksForCollection,
} from "@/data/collections";
import ArtworkCard from "@/components/artwork/ArtworkCard";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const collection = getCollection(params.slug);
  if (!collection) {
    return { title: "Collection not found" };
  }
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default function CollectionDetailPage({ params }: PageProps) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();

  const artworks = getArtworksForCollection(collection.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={collection.cover}
          alt={`${collection.name} collection`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink" />

        <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <Reveal>
            <Link
              href="/collections"
              className="text-[0.68rem] uppercase tracking-widest2 text-ivory/60 transition-colors hover:text-terracotta"
            >
              ← All Collections
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mt-8 text-terracotta">Collection</p>
          </Reveal>
          <Reveal delay={0.16}>
            <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
              {collection.name}
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-prose2 text-ivory/75 md:text-lg">
              {collection.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Artworks */}
      <section className="mx-auto max-w-editorial px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-ivory/10 pb-6">
            <h2 className="display text-3xl md:text-4xl">
              Works in this collection
            </h2>
            <span className="text-[0.68rem] uppercase tracking-widest2 text-ivory/50">
              {artworks.length} {artworks.length === 1 ? "piece" : "pieces"}
            </span>
          </div>
        </Reveal>

        {artworks.length === 0 ? (
          <p className="py-16 text-center text-ivory/60">
            No works in this collection yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((art, i) => (
              <Reveal key={art.slug} delay={(i % 3) * 0.08}>
                <ArtworkCard artwork={art} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* Next collection */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto flex max-w-editorial flex-col items-center px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-terracotta mb-5">Keep Exploring</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display max-w-3xl text-3xl leading-tight md:text-5xl">
              There are more chapters to wander through.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10">
              <ButtonLink href="/collections" variant="primary">
                All Collections
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}