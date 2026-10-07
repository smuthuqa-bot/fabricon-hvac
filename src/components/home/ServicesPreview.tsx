// src/components/home/ServicesPreview.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const fabriconServices = [
  {
    title: "High-Voltage Substations",
    eyebrow: "11kV – 400kV",
    description:
      "Turnkey substation installation, testing and commissioning for primary grid and GIS infrastructure.",
    image: "/images/fabricon/substation.jpeg",
  },
  {
    title: "Underground EHV / HV Cables",
    eyebrow: "Transmission Networks",
    description:
      "Route surveys, trenching, duct installation, cable pulling, jointing, terminations and testing.",
    image: "/images/fabricon/ehv-cables.jpeg",
  },
  {
    title: "Substation Civil Works",
    eyebrow: "Heavy Civil",
    description:
      "Transformer foundations, cable trenches, control buildings, blast-resistant structures and related infrastructure.",
    image: "/images/fabricon/civil-works.jpeg",
  },
  {
    title: "Structural Steel / PEB",
    eyebrow: "In-house Fabrication",
    description:
      "Industrial structural steel, PEB frames, pipe racks and equipment-support structures.",
    image: "/images/fabricon/structural-steel.jpeg",
  },
  {
    title: "MEP & Fire Protection",
    eyebrow: "Industrial Building Services",
    description:
      "Integrated MEP, industrial HVAC, fire protection and building support systems.",
    image: "/images/fabricon/mep-fire.jpeg",
  },
  {
    title: "Testing & Commissioning",
    eyebrow: "Grid Readiness",
    description:
      "Primary and secondary injection, relay testing, cable testing and transformer diagnostics.",
    image: "/images/fabricon/testing-commissioning.jpeg",
  },
];

const acmeServices = [
  {
    title: "Split Air Conditioning System",
    eyebrow: "DX • Inverter • VRF • Precision AC",
    description:
      "A range of split and DX-based solutions including inverter, non-inverter, ductable VRF and precision air conditioning systems.",
    image: "/images/acme-hvac/home-split-vrf.jpg",
    points: ["DX System", "Inverter / Non-Inverter", "Ductable VRF", "Precision AC"],
  },
  {
    title: "Chilled Water System",
    eyebrow: "Central Cooling",
    description:
      "Chilled-water solutions covering air- and water-cooled systems, treated fresh air, AHU packages, cooling towers and pumps.",
    image: "/images/acme-hvac/home-chilled-water.jpg",
    points: ["Air / Water Cooled", "Treated Fresh Air", "AHU Full Valve Package", "Cooling Tower & Pumps"],
  },
  {
    title: "Air Distribution & Controls",
    eyebrow: "Ducting • Diffusers • DDC",
    description:
      "Air distribution systems for building applications, together with insulation, duct testing and DDC / CPM / CAREL control panels.",
    image: "/images/acme-hvac/home-air-distribution.jpg",
    points: ["AC / Ventilation Ducts", "Diffusers & Grills", "VAV / VCD & Dampers", "DDC / CPM / CAREL"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-[var(--fabricon-line)] pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
                FABRICON Services
              </span>

              <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-[var(--fabricon-ink)] md:text-6xl">
                Full-scope infrastructure capabilities.
              </h2>
            </div>

            <Link
              href="/services/fabricon"
              className="inline-flex items-center gap-2 text-sm font-black text-[var(--fabricon-ink)]"
            >
              View all services
              <ArrowUpRight className="h-4 w-4 text-[#FB5501]" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fabriconServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[24px] border border-[var(--fabricon-line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(7,31,59,0.10)]">
                <div className="relative h-56 overflow-hidden bg-[var(--fabricon-soft)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                    {service.eyebrow}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black tracking-tight text-[var(--fabricon-ink)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--fabricon-muted)]">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ACME HVAC: larger secondary division section with 3 genuine profile images */}
        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-[var(--fabricon-line)] pt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-4xl">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[#15803D]">
                  Secondary Division
                </span>

                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--fabricon-ink)] md:text-5xl">
                  ACME HVAC
                  <span className="block text-[#15803D]">HVAC Engineering & Services</span>
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--fabricon-muted)]">
                  Established in December 2019 at its present base in Chennai, India,
                  ACME HVAC provides HVAC solutions with efficient planning and industry
                  best practices. Its capabilities cover project management, engineering,
                  supervision, supply, installation, testing, commissioning, low-side
                  contracts and customer support.
                </p>

                <p className="mt-3 text-sm font-semibold text-[var(--fabricon-ink)]">
                  Commercial Buildings • Industrial Buildings • Hospital Buildings
                </p>
              </div>

              <Link
                href="/businesses/acme-hvac"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#15803D] px-5 py-3 text-sm font-black text-white transition hover:bg-[#166534]"
              >
                Explore ACME HVAC
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {acmeServices.map((service, index) => (
                <Reveal key={service.title} delay={0.08 + index * 0.06}>
                  <article className="group h-full overflow-hidden rounded-[26px] border border-[#d9eadd] bg-[#f7fbf8] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(21,128,61,0.10)]">
                    <div className="relative h-60 overflow-hidden bg-white">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                      <div className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                        {service.eyebrow}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-black leading-tight tracking-tight text-[var(--fabricon-ink)]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[var(--fabricon-muted)]">
                        {service.description}
                      </p>

                      <div className="mt-5 grid gap-2">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-xl border border-[#dbeadf] bg-white px-3.5 py-2.5 text-xs font-bold text-[var(--fabricon-ink)]"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
