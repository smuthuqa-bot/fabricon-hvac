"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function BusinessOverview() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20 text-white md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                FABRICON
              </span>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Engineering the infrastructure
                <span className="block text-white/55">Kuwait depends on.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/businesses/fabricon"
              className="inline-flex items-center gap-2 text-sm font-black text-white/75 transition hover:text-white"
            >
              About FABRICON
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative min-h-[360px]">
                <Image
                  src="/images/fabricon/power-infrastructure.jpeg"
                  alt="FABRICON power infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-bold backdrop-blur">
                  <Zap className="h-4 w-4 text-[#FB5501]" />
                  Power infrastructure
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                  Turnkey delivery
                </div>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                  From engineering and civil works to testing and energization.
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                  FABRICON brings electrical transmission, underground cable networks,
                  substation civil construction, structural steel, MEP and commissioning
                  capabilities together under one coordinated delivery model.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "High-voltage substations",
                    "Underground EHV / HV cables",
                    "Substation civil works",
                    "Structural steel / PEB",
                    "MEP & fire protection",
                    "Testing & commissioning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/8 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
