import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = 2020;

  return (
    <footer className="border-t border-ivory/10 bg-ink">
      <div className="mx-auto max-w-editorial px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-terracotta mb-5">Crazytivity Art Stu</p>
            <p className="display text-3xl leading-tight md:text-4xl">
              Art. Emotion.
              <br />
              <em className="italic text-ivory/70">Imagination.</em>
            </p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/60">
              A personal studio for original contemporary paintings and
              commissioned works. Every piece is made by hand, with intention.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-ivory/50">Explore</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/75 transition-colors duration-300 hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ivory/50">Studio</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-terracotta"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-terracotta"
                >
                  Phone
                </a>
              </li>
              <li className="text-ivory/50">{site.location}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ivory/50">Follow</p>
            <ul className="space-y-3 text-sm">
              {Object.entries(site.socials).map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize text-ivory/75 transition-colors duration-300 hover:text-terracotta"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center">
          <p>© {year} Crazytivity Art Stu. All rights reserved.</p>
          <p className="uppercase tracking-widest2">Made with intention.</p>
        </div>
      </div>
    </footer>
  );
}