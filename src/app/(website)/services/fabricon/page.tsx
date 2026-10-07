import ServicesHero from "@/components/services/ServicesHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import { fabriconServices } from "@/data/services";

export const metadata = {
  title: "FABRICON Services | Electrical Infrastructure",
  description:
    "FABRICON electrical infrastructure, substation, cable, civil, electrical, testing and commissioning services.",
};

export default function FabriconServicesPage() {
  return (
    <main>
      <ServicesHero
        eyebrow="FABRICON SERVICES"
        title="Complete Electrical Infrastructure Solutions."
        description="From substations to power cables, from installation to commissioning, FABRICON provides focused electrical infrastructure services."
        image="/images/fabricon/substation.jpeg"
        accent="orange"
      />

      <ServiceOverview
        eyebrow="Our Services"
        title="Electrical services for demanding infrastructure projects."
        description="Our service offering covers key electrical infrastructure activities from project installation through testing, commissioning, maintenance and modification."
        services={fabriconServices}
        accent="orange"
      />

      <section className="bg-[var(--fabricon-navy)] py-20 text-white">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["EHV", "HV", "MV", "LV"].map((level) => (
              <div
                key={level}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
              >
                <span className="text-4xl font-black text-[#FB5501]">
                  {level}
                </span>

                <p className="mt-3 text-sm text-white/60">
                  Electrical infrastructure
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}