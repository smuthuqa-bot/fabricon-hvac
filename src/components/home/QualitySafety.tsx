"use client";

import Link from "next/link";
import { ArrowRight, HardHat, ShieldCheck } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export default function QualitySafety() {
  return (
    <section className="bg-[var(--fabricon-soft)] py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-[28px] bg-[var(--fabricon-navy)] p-8 text-white md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                Quality & Safety
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                17k+ safe man-hours. Zero LTI.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/60">
                The current FABRICON site highlights safety controls, permit-to-work,
                toolbox talks, hazard logs and dedicated HSE oversight across site activities.
              </p>
              <Link
                href="/quality-safety"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-white"
              >
                Our Quality & Safety approach
                <ArrowRight className="h-4 w-4 text-[#FB5501]" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="h-full rounded-[28px] border border-[var(--fabricon-line)] bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2ea] text-[#FB5501]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-black text-[var(--fabricon-ink)]">
                  Quality in every process
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--fabricon-muted)]">
                  Engineering, fabrication, site execution and commissioning are organized
                  around reliable delivery and documented project controls.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.13}>
              <div className="h-full rounded-[28px] border border-[var(--fabricon-line)] bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2ea] text-[#FB5501]">
                  <HardHat className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-black text-[var(--fabricon-ink)]">
                  Safety first on site
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--fabricon-muted)]">
                  Daily toolbox talks, hazard logs and permit-to-work practices are used
                  across excavation, lifting and high-voltage activities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
