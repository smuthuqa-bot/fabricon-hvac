import { ShieldCheck, Target, Users, Wrench } from "lucide-react";
import { aboutPage } from "@/data/about";

const icons = [Target, ShieldCheck, Wrench, Users];

export default function Principles() {
  return (
    <section className="bg-[var(--fabricon-navy)] py-20 text-white sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="section-kicker text-blue-300">OUR APPROACH</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Principles that shape the way we work.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.principles.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <Icon className="text-blue-300" size={25} />
                <h3 className="mt-7 text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
