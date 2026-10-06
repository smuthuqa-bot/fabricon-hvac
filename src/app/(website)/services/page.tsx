import ServicesHero from "@/components/services/ServicesHero";
import Link from "next/link";
import { ArrowRight, Zap, Wind } from "lucide-react";
import Reveal from "@/components/home/Reveal";

export const metadata = {
  title: "Services | FABRICON",
  description:
    "Engineering, electrical infrastructure and HVAC services from FABRICON and ACME HVAC.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero
        eyebrow="OUR SERVICES"
        title="Complete Engineering Solutions."
        description="From electrical infrastructure to HVAC systems, our specialist businesses provide focused engineering services from installation through testing, commissioning and support."
        image="/images/hero/fabricon-hero.jpg"
        accent="orange"
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">
                Specialist Capabilities
              </span>

              <h2 className="heading-lg mt-5">
                Two disciplines.
                <br />
                One commitment to execution.
              </h2>

              <p className="body-md mx-auto mt-5 max-w-2xl">
                Choose the specialist engineering division that matches your
                project requirement.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Link
                href="/services/fabricon"
                className="group relative overflow-hidden rounded-3xl bg-[var(--fabricon-navy)] p-8 text-white md:p-10"
              >
                <Zap
                  size={34}
                  className="text-[#FB5501]"
                  strokeWidth={1.7}
                />

                <h3 className="mt-7 text-3xl font-black tracking-[-0.035em]">
                  FABRICON Services
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                  Electrical infrastructure services covering substations,
                  power cables, civil and electrical works, testing,
                  commissioning and maintenance.
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#FB5501]">
                  Explore FABRICON Services
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/services/acme-hvac"
                className="group relative overflow-hidden rounded-3xl bg-[#f4f8f4] p-8 md:p-10"
              >
                <Wind
                  size={34}
                  className="text-[#22C55E]"
                  strokeWidth={1.7}
                />

                <h3 className="mt-7 text-3xl font-black tracking-[-0.035em] text-[var(--fabricon-navy)]">
                  ACME HVAC Services
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--fabricon-muted)]">
                  HVAC supply, installation, testing and commissioning across
                  commercial, industrial and hospital building environments.
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#22C55E]">
                  Explore ACME HVAC Services
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}