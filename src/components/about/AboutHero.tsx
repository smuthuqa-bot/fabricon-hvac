import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="hero-surface industrial-grid-dark relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="flex min-h-[560px] items-center py-24 lg:min-h-[620px]">
          <div className="max-w-4xl">
            <span className="section-kicker text-white">
              {aboutContent.hero.eyebrow}
            </span>

            <h1 className="display-lg mt-7 text-white">
              {aboutContent.hero.title}
            </h1>

            <p className="body-lg mt-8 max-w-2xl text-white/65">
              {aboutContent.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn btn-white"
              >
                Talk to Our Team
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="#our-story"
                className="btn border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              >
                Explore Our Story
                <ArrowDown size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technical decorative elements */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="h-72 w-72 rounded-full border border-white/10">
          <div className="m-8 h-56 w-56 rounded-full border border-white/10">
            <div className="m-8 h-40 w-40 rounded-full border border-[var(--fabricon-blue)]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}