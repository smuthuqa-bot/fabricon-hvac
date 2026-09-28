import { Building2, Factory, Hospital } from "lucide-react";
import Reveal from "./Reveal";
import { aboutPage } from "@/data/about";

const icons = [Building2, Factory, Hospital];

export default function Industries() {
  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">Industries</span>

            <h2 className="heading-lg mt-5">
              HVAC expertise across key building environments.
            </h2>

            <p className="body-md mt-5 max-w-2xl">
              ACME HVAC provides HVAC engineering and technical services for
              commercial, industrial and hospital building applications.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutPage.acme.sectors.map((industry, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={industry} delay={index * 0.08}>
                <div className="group h-full rounded-2xl border border-[var(--fabricon-line)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--fabricon-green)]/10 text-[var(--fabricon-green)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-xl font-black tracking-[-0.025em] text-[var(--fabricon-navy)]">
                    {industry}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
                    HVAC solutions planned and executed for{" "}
                    {industry.toLowerCase()} environments.
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[var(--fabricon-green)] transition-all duration-300 group-hover:w-16" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}