import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/types";

interface CollectionCardProps {
  collection: Collection;
  count?: number;
}

export default function CollectionCard({
  collection,
  count = 0,
}: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative block w-full overflow-hidden bg-ink-soft"
      aria-label={`View ${collection.name} collection`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
        <Image
          src={collection.cover}
          alt={`${collection.name} collection cover`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="text-[0.65rem] uppercase tracking-widest2 text-terracotta">
            Collection · {count} {count === 1 ? "work" : "works"}
          </p>
          <h3 className="display mt-3 text-3xl text-ivory md:text-4xl">
            {collection.name}
          </h3>
          <p className="mt-3 max-w-md text-sm text-ivory/70 md:text-base">
            {collection.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-widest2 text-ivory/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View Collection
            <span className="inline-block h-1 w-1 rounded-full bg-terracotta" />
          </span>
        </div>
      </div>
    </Link>
  );
}