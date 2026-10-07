"use client";

import { BadgeCheck, Building2, HardHat, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const items = [
  { title: "KSE Registered", icon: BadgeCheck },
  { title: "CAPT Registered", icon: Building2 },
  { title: "Safety First", icon: HardHat },
  { title: "Turnkey Execution", icon: Wrench },
  { title: "Quality Focused", icon: ShieldCheck },
];

export default function TrustBar() {
  return (
    <section className="border-b border-[var(--fabricon-line)] bg-white">
      <div className="container-x py-5">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {items.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center justify-center gap-2 text-center text-xs font-black uppercase tracking-[0.12em] text-[var(--fabricon-ink)] md:justify-start">
                <Icon className="h-4 w-4 shrink-0 text-[#FB5501]" />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
