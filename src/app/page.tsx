import Image from "next/image";
import { getFeatured } from "@/data/artworks";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  const featured = getFeatured();
  const hero = featured[0];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        {hero && (
          <div className="absolute inset-0">
            <Image
              src={hero.image}
              alt={`${hero.title} — ${hero.medium}`}
              fill
              priority
              sizes="100vw"
              className="object-cover animate-kenburns"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
          </div>
        )}

        <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-24">
          <Reveal>
            <p className="eyebrow text-terracotta mb-6">
              Contemporary Art Studio
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display max-w-5xl text-[2.75rem] leading-[0.98] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Art that turns
              <br />
              imagination into
              <br />
              <em className="italic text-terracotta">emotion.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-prose2 text-base leading-relaxed text-ivory/70 md:text-lg">
              Original contemporary paintings by{" "}
              <span className="text-ivory">Crazytivity Art Stu</span> bold,
              emotional works that live at the edge of memory and color.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/art" variant="primary">
                Explore the Art
              </ButtonLink>
              <ButtonLink href="/commissions" variant="outline">
                Work With Me
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        >
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-ivory/40 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-ivory/10 bg-ink py-6">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-16">
              {[
                "Original Paintings",
                "Private Commissions",
                "Studio Works",
                "Curated Collections",
                "Available Now",
              ].map((label) => (
                <span
                  key={`${dup}-${label}`}
                  className="flex items-center gap-16 text-[0.72rem] uppercase tracking-widest2 text-ivory/60"
                >
                  {label}
                  <span className="inline-block h-1 w-1 rounded-full bg-terracotta" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED ARTWORK ──────────────────────────────── */}
      <section className="mx-auto max-w-editorial px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div>
              <p className="eyebrow text-terracotta mb-4">Selected Work</p>
              <h2 className="display text-4xl md:text-6xl">
                Recent paintings
              </h2>
            </div>
            <ButtonLink href="/art" variant="ghost">
              View all
            </ButtonLink>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          {featured.slice(0, 4).map((art, i) => {
            const spans = [
              "md:col-span-7 md:row-span-2 aspect-[4/5]",
              "md:col-span-5 aspect-square",
              "md:col-span-5 aspect-square",
            ];
            const cls = spans[i] ?? "md:col-span-4 aspect-square";
            return (
              <Reveal key={art.slug} delay={i * 0.08} className={cls}>
                <article className="group relative h-full w-full overflow-hidden bg-ink-soft">
                  <Image
                    src={art.image}
                    alt={`${art.title} — ${art.medium}, ${art.dimensions}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[0.68rem] uppercase tracking-widest2 text-ivory/60">
                      {art.year} · {art.medium}
                    </p>
                    <h3 className="display mt-2 text-2xl text-ivory md:text-3xl">
                      {art.title}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-widest2 text-terracotta">
                      {art.status === "Available"
                        ? `${art.price} · Available`
                        : art.status}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── ARTIST INTRO ──────────────────────────────────── */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto grid max-w-editorial gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
              {/* 
                ⚠️ PORTRAIT IMAGE
                Currently using one of your paintings as a placeholder.
                To use a real portrait:
                  1. Save your portrait to: /public/images/artist/portrait.jpg
                  2. Change src below to: "/images/artist/portrait.jpg"
              */}
              <Image
                src="/images/artwork/painting-02.jpg"
                alt="The artist's studio work"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7 md:pt-8">
            <p className="eyebrow text-terracotta mb-5">The Artist</p>
            <h2 className="display text-3xl leading-tight md:text-5xl">
              I paint the space between what I remember and what I imagine.
            </h2>
            <div className="mt-8 space-y-5 text-ivory/70 md:text-lg">
              <p>
                Crazytivity Art Stu is a contemporary art practice built around
                color as a form of memory. Each painting begins as a feeling —
                a room, a face, a season and ends somewhere the mind can
                almost name.
              </p>
              <p>
                The work moves between abstraction and figuration, often in the
                same canvas. Layering, scraping, and returning is part of the
                process; so is knowing when to stop.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/about" variant="outline">
                Read the Studio Story
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA (centered) ────────────────────────────────── */}
      <section className="border-t border-ivory/10 bg-ink">
        <div className="mx-auto flex max-w-editorial flex-col items-center px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-terracotta mb-6">Commissions</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="display mx-auto max-w-4xl text-4xl leading-tight md:text-6xl">
              Have an idea, a space,
              <br />
              or a story to bring to life?
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-prose2 text-ivory/70 md:text-lg">
              I take on a small number of commissions each season bespoke
              sizes, palettes, and styles made for the place they&apos;ll live.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/commissions" variant="primary">
                Request a Commission
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Just say hello
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}