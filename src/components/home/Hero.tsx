"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MoveUpRight,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

const stats = [
  { value: "17k+", label: "Safe man-hours" },
  { value: "45+", label: "Substations" },
  { value: "180+ km", label: "EHV network" },
];

const capabilities = [
  "11kV – 400kV turnkey substations",
  "Underground EHV / HV cable systems",
  "Civil infrastructure & structural steel",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f7fa] text-[var(--fabricon-ink)]">
      {/* subtle editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,31,59,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,31,59,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-x relative">
        <div className="relative grid min-h-[720px] lg:min-h-[760px] lg:grid-cols-[0.94fr_1.06fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 flex items-center py-20 lg:py-28">
            <Reveal>
              <div className="max-w-2xl lg:pr-10 xl:pr-16">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-[#FB5501]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#FB5501]">
                    Turnkey EPC • Kuwait
                  </span>
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px]">
                  Powering
                  <span className="block text-[var(--fabricon-navy)]">
                    Kuwait&apos;s
                  </span>
                  <span className="relative block text-[#FB5501]">
                    critical
                    <span className="absolute -bottom-1 left-1/2 hidden h-1 w-24 -translate-x-1/2 bg-[#FB5501]/15 lg:block" />
                  </span>
                  <span className="block text-[var(--fabricon-navy)]">
                    infrastructure.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-600 md:text-lg">
                  FABRICON delivers turnkey engineering across high-voltage
                  substations, underground EHV transmission, heavy civil works
                  and structural steel fabrication.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/services/fabricon"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--fabricon-navy)] px-6 py-3.5 text-sm font-black text-white shadow-[0_16px_35px_rgba(7,31,59,0.16)] transition hover:-translate-y-0.5 hover:bg-[#0c3158]"
                  >
                    Explore FABRICON
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-black text-[var(--fabricon-navy)] backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
                  >
                    Request Tender Proposal
                    <FileText className="h-4 w-4 text-[#FB5501]" />
                  </Link>
                </div>

                {/* Premium stats rail — no cards */}
                <div className="mt-12 border-t border-slate-200 pt-6">
                  <div className="flex flex-wrap gap-x-8 gap-y-5">
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="flex items-start gap-5">
                        <div>
                          <div className="text-2xl font-black tracking-tight text-[var(--fabricon-navy)] md:text-3xl">
                            {stat.value}
                          </div>
                          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            {stat.label}
                          </div>
                        </div>

                        {index !== stats.length - 1 && (
                          <span className="hidden h-10 w-px bg-slate-200 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.12}>
            <div className="relative min-h-[430px] overflow-hidden lg:min-h-full">
              {/* orange accent rail */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-16 z-20 h-28 w-1.5 bg-[#FB5501] lg:top-24"
              />

              <Image
                src="/images/fabricon/power-cable.jpeg"
                alt="FABRICON power substation and infrastructure"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center"
              />

              {/* refined image treatment */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--fabricon-navy)]/55 via-transparent to-transparent" />

              {/* floating image label */}
              <div className="absolute left-6 top-6 z-10 lg:left-10 lg:top-10">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#FB5501]" />
                  Power Infrastructure
                </div>
              </div>

              {/* vertical editorial marker */}
              <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 origin-center xl:block">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/70">
                  Kuwait • Engineering • Infrastructure
                </span>
              </div>

              {/* bottom image caption */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 lg:p-10">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/65">
                    <span className="h-px w-10 bg-[#FB5501]" />
                    Built for dependable delivery
                  </div>

                  <div className="grid gap-2 md:grid-cols-3">
                    {capabilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs leading-5 text-white/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FB5501]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* corner detail */}
              <div className="absolute bottom-6 right-6 z-10 lg:bottom-10 lg:right-10">
                <Link
                  href="/projects"
                  aria-label="View FABRICON projects"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-md transition hover:bg-[#FB5501] hover:border-[#FB5501]"
                >
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* asymmetrical orange geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[48%] z-30 hidden h-20 w-20 -translate-x-1/2 lg:block"
          >
            <div className="absolute bottom-0 left-0 h-px w-20 bg-[#FB5501]" />
            <div className="absolute bottom-0 left-0 h-20 w-px bg-[#FB5501]" />
          </div>
        </div>
      </div>

      {/* bottom whitespace + continuation cue */}
      <div className="container-x relative z-20">
        <div className="flex items-center justify-between border-t border-slate-200 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <span>Electrical Infrastructure • EPC • Power Systems</span>
          <Link
            href="/about"
            className="hidden items-center gap-2 transition hover:text-[var(--fabricon-ink)] sm:inline-flex"
          >
            Discover FABRICON
            <MoveUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
