import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { careerOpenings } from "@/data/careers";

export default function CareerOpenings() {
  return (
    <section id="openings" className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="section-kicker">Current Openings</span>

              <h2 className="heading-lg mt-5">
                Find your next opportunity.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--fabricon-muted)]">
              Explore opportunities across FABRICON and ACME HVAC. Availability
              may change based on project requirements.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {careerOpenings.map((opening, index) => (
            <Reveal key={opening.id} delay={index * 0.05}>
              <div className="group rounded-2xl border border-[var(--fabricon-line)] bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:p-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--fabricon-navy)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                        {opening.company}
                      </span>

                      <span className="rounded-full bg-[#FB5501]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#FB5501]">
                        {opening.type}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black tracking-[-0.025em] text-[var(--fabricon-navy)]">
                      {opening.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-[var(--fabricon-muted)]">
                      <MapPin size={15} />
                      {opening.location}
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--fabricon-muted)]">
                      {opening.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[var(--fabricon-navy)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#FB5501]"
                  >
                    Apply / Enquire
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}