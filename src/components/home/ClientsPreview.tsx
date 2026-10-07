"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, FileCheck2, Globe2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const credentials = [
  {
    title: "KSE Registered",
    text: "Engineering registration supporting Kuwait-focused infrastructure work.",
    icon: FileCheck2,
  },
  {
    title: "CAPT Registered",
    text: "Registered for Kuwait government tendering and infrastructure opportunities.",
    icon: Building2,
  },
  {
    title: "PAHW Housing",
    text: "Listed on the current FABRICON site within its infrastructure credentials.",
    icon: Globe2,
  },
  {
    title: "ISO 9001 / 14001 / 45001",
    text: "Quality, environmental and occupational health & safety certifications stated on the current site.",
    icon: ShieldCheck,
  },
];

export default function ClientsPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
              Credentials & Trust
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--fabricon-ink)] md:text-6xl">
              Built around compliance, safety and accountable execution.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--fabricon-muted)]">
              FABRICON presents its Kuwait registrations, certifications and safety
              benchmarks as part of its commitment to critical infrastructure delivery.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {credentials.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-[24px] border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--fabricon-navy)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-black text-[var(--fabricon-ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fabricon-muted)]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-[24px] bg-[var(--fabricon-navy)] p-7 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.16em] text-[#FB5501]">
                Client & partner network
              </div>
              <div className="mt-2 text-xl font-black">
                Explore the full company credentials and project portfolio.
              </div>
            </div>
            <Link
              href="/clients-partners"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--fabricon-ink)] transition hover:bg-white/90"
            >
              Clients & Partners
              <ArrowUpRight className="h-4 w-4 text-[#FB5501]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
