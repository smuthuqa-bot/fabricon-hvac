import { CheckCircle2, Factory, Gauge, Hospital, Settings2 } from "lucide-react";
import { aboutPage } from "@/data/about";

const icons = [Settings2, Gauge, Factory, Hospital];

export default function Capabilities() {
  return (
    <section className="bg-[var(--fabricon-soft)] py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker text-green-700">ACME HVAC</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--fabricon-ink)] sm:text-5xl">Project capability from planning to support.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">ACME HVAC states that it is equipped with project managers, project engineers and project supervisors for supply, installation, testing and commissioning of HVAC products, including low-side contracts and customer support.</p>

            <div className="mt-7 space-y-3">
              {aboutPage.acme.capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={17} className="text-green-600" />{item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Areas of expertise</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {aboutPage.acme.sectors.map((sector, index) => {
                const Icon = icons[index];
                return (
                  <div key={sector} className="rounded-3xl border border-[var(--fabricon-line)] bg-white p-6">
                    <Icon size={25} className="text-green-600" />
                    <h3 className="mt-8 text-lg font-black text-[var(--fabricon-ink)]">{sector}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">HVAC planning, installation, testing, commissioning and support.</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
