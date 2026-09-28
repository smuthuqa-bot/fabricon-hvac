import { UserRound } from "lucide-react";
import { aboutPage } from "@/data/about";

export default function Management() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="section-kicker text-green-700">ACME HVAC</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--fabricon-ink)] sm:text-5xl">Management & technical direction</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">The ACME HVAC company profile identifies the following management team and describes the organisation&apos;s project management, engineering and supervisory capabilities.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {aboutPage.acme.management.map((person) => (
            <article key={person.name} className="rounded-[2rem] border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-7 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--fabricon-navy)] text-white">
                <UserRound size={24} />
              </div>
              <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-green-700">{person.role}</p>
              <h3 className="mt-2 text-2xl font-black text-[var(--fabricon-ink)]">{person.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
