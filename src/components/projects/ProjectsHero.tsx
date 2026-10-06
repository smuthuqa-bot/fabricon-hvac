import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[var(--fabricon-navy)]">
      <div className="absolute inset-0">
        <Image
          src="/images/projects/rmz-cooling-tower.jpg"
          alt="Engineering project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[var(--fabricon-navy)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fabricon-navy)] via-[var(--fabricon-navy)]/90 to-transparent" />
      </div>

      <div className="container-x relative z-10 flex min-h-[520px] items-center">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Our Projects
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-7xl">
              Delivering Excellence
              <br />
              Across Industries
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              A showcase of project experience across HVAC engineering,
              commercial buildings and industrial applications, supported by
              Fabricon&apos;s power infrastructure capabilities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#FB5501] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#E94D00]"
              >
                Discuss Your Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}