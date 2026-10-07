import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function CareersHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[var(--fabricon-navy)]">
      <div className="absolute inset-0">
        <Image
          src="/images/acme-hvac/hvac-solutions.jpg"
          alt="Engineering and HVAC project environment"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <BriefcaseBusiness size={14} />
              Careers
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-7xl">
              Build Your Future
              <br />
              <span className="text-[#FB5501]">With Us.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Join a growing engineering team working across power
              infrastructure, electrical systems and HVAC solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 rounded-md bg-[#FB5501] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#E94D00]"
              >
                View Openings
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}