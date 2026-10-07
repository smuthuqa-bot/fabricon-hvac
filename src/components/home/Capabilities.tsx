"use client";

import { ArrowDownRight, Cable, Factory, HardHat, RadioTower } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const steps = [
  {
    number: "01",
    title: "Engineering & Planning",
    text: "Route surveys, technical planning, coordination and project preparation before site execution.",
    icon: RadioTower,
  },
  {
    number: "02",
    title: "Civil & Electrical Execution",
    text: "Coordinated construction, cable, substation and infrastructure works on site.",
    icon: HardHat,
  },
  {
    number: "03",
    title: "Testing & Commissioning",
    text: "Electrical testing and system diagnostics to prepare assets for reliable energization.",
    icon: Cable,
  },
  {
    number: "04",
    title: "Turnkey Handover",
    text: "Integrated project delivery with one accountable coordination model through completion.",
    icon: Factory,
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20 text-white md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FB5501]">
              The FABRICON Method
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              From groundbreak to live energization.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/60">
              A coordinated delivery approach that brings engineering, construction,
              fabrication, testing and commissioning together.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, text, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.06}>
              <div className="group h-full bg-[#071f3b] p-7 transition hover:bg-[#0b2a4c] md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#FB5501]">{number}</span>
                  <Icon className="h-5 w-5 text-white/35 transition group-hover:text-[#FB5501]" />
                </div>
                <h3 className="mt-14 text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
                <ArrowDownRight className="mt-8 h-5 w-5 text-white/25" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
