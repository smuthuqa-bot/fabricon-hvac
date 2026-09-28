import { Building2, Cable, Wind } from "lucide-react";
import { aboutPage } from "@/data/about";

export default function CompanyStory() {
  return (
    <section id="story" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="section-kicker">Our Story</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--fabricon-ink)] sm:text-5xl">
            Different disciplines. A shared commitment to engineering.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article id="fabricon" className="scroll-mt-28 rounded-[2rem] border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--fabricon-navy)] text-white">
                <Cable size={23} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{aboutPage.fabricon.eyebrow}</span>
            </div>
            <h3 className="mt-7 text-2xl font-black text-[var(--fabricon-ink)] sm:text-3xl">{aboutPage.fabricon.name}</h3>
            <h4 className="mt-2 text-lg font-bold text-slate-700">{aboutPage.fabricon.title}</h4>
            <p className="mt-5 text-sm leading-7 text-slate-600">{aboutPage.fabricon.story}</p>
          </article>

          <article id="acme-hvac" className="scroll-mt-28 rounded-[2rem] border border-[var(--fabricon-line)] bg-white p-7 shadow-[0_18px_60px_rgba(7,31,59,.08)] sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--fabricon-green)] text-white">
                <Wind size={23} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-green-700">{aboutPage.acme.eyebrow}</span>
            </div>
            <h3 className="mt-7 text-2xl font-black text-[var(--fabricon-ink)] sm:text-3xl">{aboutPage.acme.name}</h3>
            <h4 className="mt-2 text-lg font-bold text-slate-700">{aboutPage.acme.title}</h4>
            <p className="mt-5 text-sm leading-7 text-slate-600">{aboutPage.acme.story}</p>
          </article>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-sm text-slate-600">
          <Building2 className="shrink-0 text-blue-600" size={20} />
          <span>Both businesses are presented separately so the website does not mix their company histories, capabilities or management information.</span>
        </div>
      </div>
    </section>
  );
}
