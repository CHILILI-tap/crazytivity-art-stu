import { collections, getArtworksForCollection } from "@/data/collections";
import CollectionCard from "@/components/collections/CollectionCard";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Collections",
  description:
    "Curated collections of contemporary paintings grouped by mood, theme, and season. Each collection is a different chapter of the studio.",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-editorial px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">Curated Series</p>
          <h1 className="display max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
            Chapters of the
            <br />
            <em className="italic text-ivory/70">studio.</em>
          </h1>
          <p className="mt-8 max-w-prose2 text-ivory/70 md:text-lg">
            Each collection is a group of paintings that share a season, a
            feeling, or a way of working. Explore a theme, or drift between
            them.
          </p>
        </Reveal>
      </section>

      {/* Collections grid */}
      <section className="mx-auto max-w-editorial px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, i) => (
            <Reveal key={collection.slug} delay={i * 0.08}>
              <CollectionCard
                collection={collection}
                count={getArtworksForCollection(collection.slug).length}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}