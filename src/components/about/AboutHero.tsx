import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { aboutPage } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--fabricon-navy)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(22,133,237,.28),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(99,181,47,.16),transparent_28%)]" />
      <div className="industrial-grid absolute inset-0 opacity-[0.08]" />

      <div className="container-x relative grid min-h-[520px] items-end gap-10 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div>
          <p className="section-kicker text-blue-300">{aboutPage.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Two Businesses.
            <span className="block text-blue-300">One Purpose.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {aboutPage.hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#fabricon" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--fabricon-navy)] hover:bg-blue-50">
              Explore FABRICON <ArrowRight size={16} />
            </Link>
            <Link href="#acme-hvac" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              Explore ACME HVAC <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative ml-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">Engineering Focus</p>
            <div className="mt-6 space-y-4">
              {[
                ["01", "Power Infrastructure"],
                ["02", "HVAC Engineering"],
                ["03", "Testing & Commissioning"],
                ["04", "Technical Support"],
              ].map(([n, label]) => (
                <div key={n} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-xs font-black text-blue-300">{n}</span>
                  <span className="text-sm font-semibold text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-x relative pb-7">
        <a href="#story" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45 hover:text-white">
          Scroll to our story <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
