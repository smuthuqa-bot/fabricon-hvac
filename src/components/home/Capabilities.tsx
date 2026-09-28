import { Building2, Factory, Hospital, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const capabilities = [
  {
    title: "Commercial Buildings",
    icon: Building2,
  },
  {
    title: "Industrial Buildings",
    icon: Factory,
  },
  {
    title: "Hospital Buildings",
    icon: Hospital,
  },
  {
    title: "Project Support",
    icon: Wrench,
  },
];

export default function Capabilities() {
  return (
    <section className="section-padding bg-[var(--fabricon-navy)] text-white">
      <div className="industrial-grid-dark">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <span className="section-kicker">Capabilities</span>
              <h2 className="heading-xl mt-5">
                Technical capability where the environment demands it.
              </h2>
              <p className="body-lg mt-6 text-white/60">
                ACME HVAC identifies commercial, industrial and hospital
                buildings among its areas of expertise, supported by project
                managers, engineers and supervisors.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <Reveal key={capability.title} delay={index * 0.06}>
                  <div className="group h-full bg-[var(--fabricon-navy)] p-7 transition-colors hover:bg-[var(--fabricon-navy-light)]">
                    <Icon
                      size={27}
                      className="text-[var(--fabricon-blue)] transition-colors group-hover:text-[var(--fabricon-green)]"
                    />
                    <h3 className="mt-14 text-lg font-bold">
                      {capability.title}
                    </h3>
                    <div className="mt-5 h-px w-10 bg-[var(--fabricon-green)] transition-all group-hover:w-16" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
