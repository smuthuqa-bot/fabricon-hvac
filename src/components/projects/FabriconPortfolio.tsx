import {
  Cable,
  Factory,
  Gauge,
  Zap,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { fabriconProjectStats } from "@/data/projects";

const capabilities = [
  {
    icon: Zap,
    title: "High-Voltage Substations",
    text: "Turnkey substation engineering, installation, testing and commissioning.",
  },
  {
    icon: Cable,
    title: "Underground EHV / HV Networks",
    text: "Power cable route, installation, jointing, termination and testing capabilities.",
  },
  {
    icon: Factory,
    title: "Civil & Infrastructure",
    text: "Substation civil infrastructure, foundations, buildings and supporting works.",
  },
  {
    icon: Gauge,
    title: "Testing & Commissioning",
    text: "Electrical testing, diagnostics, commissioning and grid maintenance support.",
  },
];

export default function FabriconPortfolio() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">FABRICON</span>

            <h2 className="heading-lg mt-5">
              Power infrastructure delivered across Kuwait.
            </h2>

            <p className="body-md mt-5">
              FABRICON&apos;s current published portfolio highlights
              high-voltage substations, underground EHV/HV cable networks,
              civil infrastructure and testing & commissioning capabilities
              across Kuwait.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fabriconProjectStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-7">
                <div className="text-4xl font-black tracking-[-0.04em] text-[var(--fabricon-navy)]">
                  {stat.value}
                </div>

                <div className="mt-3 text-sm font-semibold leading-6 text-[var(--fabricon-muted)]">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-[var(--fabricon-line)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FB5501]/10 text-[#FB5501]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[var(--fabricon-navy)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[var(--fabricon-muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}