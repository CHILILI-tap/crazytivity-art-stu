import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "About the Artist",
  description:
    "The story, process, and philosophy behind Crazytivity Art Stu a contemporary painting practice built around color, memory, and emotion.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-editorial px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">The Studio Story</p>
          <h1 className="display max-w-5xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">
            I paint the space between what I remember and what I imagine.
          </h1>
        </Reveal>
      </section>

      {/* Portrait + intro */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto grid max-w-editorial gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
              {/* 
                ⚠️ ARTIST IMAGE
                Currently showing one of your paintings as a placeholder.
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
            <p className="mt-4 text-xs uppercase tracking-widest2 text-ivory/40">
              In the studio, 2026
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7 md:pt-6">
            <div className="space-y-6 text-ivory/75 md:text-lg">
              <p className="display text-2xl leading-snug text-ivory md:text-3xl">
                Crazytivity Art Stu is a contemporary painting practice, and
                also just a room where I spend most of my hours trying to
                remember something I&apos;ve never seen.
              </p>
              <p>
                I grew up around color the ochre walls of a grandmother&apos;s
                house, the specific orange of late afternoon in a dry season,
                the exact grey of a rainy Sunday. Those colors became memories
                before I had words for them. Painting is how I go back.
              </p>
              <p>
                Each canvas begins as a feeling more than an idea: a
                temperature, a weight, a face I can almost see. I work in
                layers acrylics, oils, raw pigment, sometimes thread or sand
                building up and scraping back until the surface starts to
                answer.
              </p>
              <p>
                The work moves between abstraction and figuration, often on the
                same canvas. A painting is finished when it stops asking
                questions and starts giving them back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="mx-auto max-w-editorial px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">The Journey</p>
          <h2 className="display max-w-3xl text-4xl leading-tight md:text-6xl">
            A practice, in
            <br />
            <em className="italic text-ivory/70">chapters.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          {[
            {
              year: "Early years",
              title: "Learning to see",
              body: "First brushes, first ruinous paintings, first understanding that looking is a skill you can practice.",
            },
            {
              year: "Formation",
              title: "Studio training",
              body: "Years spent studying color theory, classical composition, and the discipline of showing up to a canvas every single day.",
            },
            {
              year: "Shift",
              title: "Toward abstraction",
              body: "A move away from likeness and into feeling letting the painting decide what it wanted to be.",
            },
            {
              year: "Now",
              title: "Crazytivity Art Stu",
              body: "A full practice of original work, commissions, and collections with more paintings in progress than I will admit.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border-t border-ivory/15 pt-6">
                <p className="text-[0.68rem] uppercase tracking-widest2 text-terracotta">
                  {item.year}
                </p>
                <h3 className="display mt-3 text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-ivory/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-ivory/10 bg-ink-soft">
        <div className="mx-auto max-w-editorial px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-terracotta mb-6">Philosophy</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="display mx-auto max-w-4xl text-3xl leading-snug md:text-5xl">
              &ldquo;Color is a form of memory. The brush is just the way I
              get there.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-10 max-w-prose2 text-ivory/70 md:text-lg">
              I believe paintings should be lived with not admired from a
              distance. A good painting keeps changing depending on the hour,
              the light, and the mood of the room it lives in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-editorial px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-terracotta mb-6">Work With Me</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mx-auto max-w-3xl text-4xl leading-tight md:text-5xl">
            Let&apos;s make something you&apos;ll want to live with.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/commissions" variant="primary">
              Commission a Piece
            </ButtonLink>
            <ButtonLink href="/art" variant="ghost">
              See the Work
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}