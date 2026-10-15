import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Crazytivity Art Stu general inquiries, commissions, or purchases. Let's create something meaningful.",
};

export default function ContactPage() {
  const socials = Object.entries(site.socials);

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-editorial px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <p className="eyebrow text-terracotta mb-5">Get in Touch</p>
          <h1 className="display max-w-4xl text-5xl leading-[0.98] md:text-7xl lg:text-[5rem]">
            Let&apos;s create
            <br />
            <em className="italic text-ivory/70">something meaningful.</em>
          </h1>
          <p className="mt-8 max-w-prose2 text-ivory/70 md:text-lg">
            Have an idea, a space that needs art, or a story you want brought
            to life? Tell me about it I read every message.
          </p>
        </Reveal>
      </section>

      {/* Form + Info */}
      <section className="border-t border-ivory/10 bg-ink-soft">
        <div className="mx-auto grid max-w-editorial gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          {/* Form */}
          <Reveal className="md:col-span-8">
            <ContactForm />
          </Reveal>

          {/* Direct info */}
          <Reveal delay={0.1} className="md:col-span-4">
            <div className="space-y-10">
              <div>
                <p className="eyebrow text-ivory/50 mb-3">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="block text-lg text-ivory transition-colors hover:text-terracotta"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-ivory/75 transition-colors hover:text-terracotta"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <p className="eyebrow text-ivory/50 mb-3">Studio</p>
                <p className="text-ivory/75">{site.location}</p>
                <p className="mt-2 text-sm text-ivory/50">
                  Visits by appointment only.
                </p>
              </div>

              <div>
                <p className="eyebrow text-ivory/50 mb-3">Follow</p>
                <ul className="space-y-2">
                  {socials.map(([name, url]) => (
                    <li key={name}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="capitalize text-ivory/75 transition-colors hover:text-terracotta"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow text-ivory/50 mb-3">Reply Time</p>
                <p className="text-ivory/75">
                  Usually within 2–3 working days.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}