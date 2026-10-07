"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const operations = [
  {
    title: "Substation Installation",
    category: "Power Infrastructure",
    image: "/images/projects/fabricon-substation.jpg",
  },
  {
    title: "Underground EHV Networks",
    category: "Transmission",
    image: "/images/projects/fabricon-ehv-cable.jpg",
  },
  {
    title: "Civil & Structural Works",
    category: "Infrastructure",
    image: "/images/projects/fabricon-civil.jpg",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-[var(--fabricon-soft)] py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                FABRICON Operations
              </span>
              <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-[var(--fabricon-ink)] md:text-6xl">
                Infrastructure delivered with discipline.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-black text-[var(--fabricon-ink)]"
            >
              View projects <ArrowUpRight className="h-4 w-4 text-[#FB5501]" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <article className="group relative min-h-[480px] overflow-hidden rounded-[30px] bg-[var(--fabricon-navy)]">
              <Image
                src={operations[0].image}
                alt={operations[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-[#FB5501]">
                  {operations[0].category}
                </div>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                  {operations[0].title}
                </h3>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {operations.slice(1).map((item, index) => (
              <Reveal key={item.title} delay={(index + 1) * 0.07}>
                <article className="group relative min-h-[228px] overflow-hidden rounded-[30px] bg-[var(--fabricon-navy)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[11px] font-black uppercase tracking-[0.15em] text-[#FB5501]">
                      {item.category}
                    </div>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-7 grid gap-4 sm:grid-cols-4">
            {[
              ["45+", "Substations delivered"],
              ["180+ km", "Underground EHV installed"],
              ["600 m²", "In-house steel plant"],
              ["17k+", "Safe man-hours"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-5">
                <div className="text-3xl font-black text-[var(--fabricon-ink)]">{value}</div>
                <div className="mt-1 text-xs leading-5 text-[var(--fabricon-muted)]">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
