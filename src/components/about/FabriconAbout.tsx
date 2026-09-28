import { CheckCircle2, Eye, Target } from "lucide-react";
import { aboutPage } from "@/data/about";

export default function FabriconAbout() {
  return (
    <section className="bg-[var(--fabricon-soft)] py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker text-blue-600">FABRICON</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--fabricon-ink)] sm:text-5xl">Built around transmission, distribution and project execution.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">The published Fabricon profile describes a focus on electricity transmission and distribution, with services extending from substation and cable works through testing, commissioning, maintenance and troubleshooting.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-[var(--fabricon-navy)] p-7 text-white sm:col-span-2">
              <div className="flex items-start gap-4">
                <Target className="mt-1 text-blue-300" size={24} />
                <div>
                  <h3 className="text-xl font-black">Our Objective</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{aboutPage.fabricon.objective}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--fabricon-line)] bg-white p-7">
              <Eye className="text-blue-600" size={24} />
              <h3 className="mt-5 text-xl font-black text-[var(--fabricon-ink)]">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{aboutPage.fabricon.vision}</p>
            </div>

            <div className="rounded-3xl border border-[var(--fabricon-line)] bg-white p-7">
              <h3 className="text-xl font-black text-[var(--fabricon-ink)]">Core Capabilities</h3>
              <ul className="mt-5 space-y-3">
                {aboutPage.fabricon.capabilities.slice(0, 5).map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Relevant operating environments</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.fabricon.sectors.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-5 text-sm font-bold text-[var(--fabricon-ink)]">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
