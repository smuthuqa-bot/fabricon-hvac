"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const points = [
  "11kV to 400kV substation capability",
  "Underground EHV/HV cable networks",
  "Heavy civil and structural steel execution",
  "In-house fabrication and site coordination",
];

export default function AboutPreview() {
  return (
    <section className="bg-[var(--fabricon-soft)] py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <Reveal>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                About FABRICON
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[var(--fabricon-ink)] md:text-6xl">
                Built for complex infrastructure.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--fabricon-muted)]">
                FABRICON is a Kuwait-based multidisciplinary EPC contractor specializing
                in electrical power transmission, substations, civil construction and
                structural steel fabrication.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--fabricon-ink)] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#102f50]"
              >
                Discover FABRICON
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-white p-7 shadow-[0_18px_70px_rgba(7,31,59,0.08)] md:p-10">
              <div className="text-sm font-black uppercase tracking-[0.12em] text-[var(--fabricon-ink)]">
                What we bring together
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-[var(--fabricon-line)] p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FB5501]" />
                    <span className="text-sm leading-6 text-[var(--fabricon-ink)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
