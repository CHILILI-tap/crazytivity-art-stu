import Image from "next/image";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Commissions",
  description:
    "Commission an original painting from Crazytivity Art Stu. Bespoke sizes, palettes, and styles made for the space they'll live in.",
};

const steps = [
  {
    n: "01",
    title: "Conversation",
    body: "You share the space, the feeling, the size, or a reference. Anything from a photo to a phrase is enough to begin.",
  },
  {
    n: "02",
    title: "Direction",
    body: "I send palette directions, mood references, and a rough composition. We refine until the vision is clear.",
  },
  {
    n: "03",
    title: "The Making",
    body: "The painting is created in the studio over several weeks. You get progress photos at key stages.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "Finished, signed, and safely packed. Shipped with insurance, or arranged for local pickup.",
  },
];

export default function CommissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80svh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1800&q=80"
          alt="Studio work in progress"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />

        <div className="relative z-10 mx-auto flex h-full max-w-editorial flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <Reveal>
            <p className="eyebrow text-terracotta mb-6">Commissions</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
              A painting made
              <br />
              for the place
              <br />
              <em className="italic text-terracotta">it will live.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-prose2 text-ivory/75 md:text-lg">
              I take on a small number of commissions each season bespoke
              sizes, palettes, and styles, made around you and the space.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What you can commission */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto max-w-editorial px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-terracotta mb-5">What&apos;s Possible</p>
            <h2 className="display max-w-3xl text-4xl leading-tight md:text-5xl">
              Size, palette, subject
              <br />
              <em className="italic text-ivory/70">your call.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Abstract",
                body: "Color-driven, atmospheric, or gestural works made to sit in a specific room and light.",
              },
              {
                title: "Figurative",
                body: "Portraits and figures painted from photos, memory, or a story you want told through paint.",
              },
              {
                title: "Mixed Media",
                body: "Paintings using pigment, paper, thread, or texture to build a surface you can feel.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border-t border-ivory/15 pt-6">
                  <h3 className="display text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-ivory/70">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-editorial px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">The Process</p>
          <h2 className="display max-w-3xl text-4xl leading-tight md:text-5xl">
            Four quiet steps.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-20 md:gap-y-14">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="grid grid-cols-[auto,1fr] gap-6 border-t border-ivory/15 pt-6">
                <span className="display text-3xl text-terracotta md:text-4xl">
                  {step.n}
                </span>
                <div>
                  <h3 className="display text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-ivory/70">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-8 border-t border-ivory/10 pt-10 md:grid-cols-3">
            <div>
              <p className="eyebrow text-ivory/50 mb-2">Timeline</p>
              <p className="text-ivory/75">
                Typically 4–10 weeks depending on size and complexity.
              </p>
            </div>
            <div>
              <p className="eyebrow text-ivory/50 mb-2">Pricing</p>
              <p className="text-ivory/75">
                Quoted per project based on size, medium, and finish. A 50%
                deposit begins the work.
              </p>
            </div>
            <div>
              <p className="eyebrow text-ivory/50 mb-2">Rights</p>
              <p className="text-ivory/75">
                You receive the original work. The artist retains image rights
                unless otherwise agreed.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Form */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto max-w-editorial px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <p className="eyebrow text-terracotta mb-5">Inquire</p>
              <h2 className="display text-3xl leading-tight md:text-4xl">
                Tell me what
                <br />
                you have in mind.
              </h2>
              <p className="mt-6 text-ivory/70">
                Fill in the form and I&apos;ll reply within a few days with
                next steps, palette ideas, and a quote.
              </p>
              <p className="mt-6 text-sm text-ivory/50">
                Prefer to write directly? Use{" "}
                <a
                  href="mailto:hello@crazytivityart.studio"
                  className="text-terracotta underline-offset-4 hover:underline"
                >
                  hello@crazytivityart.studio
                </a>
              </p>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-8">
              <ContactForm defaultInquiry="Commission" variant="commission" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}