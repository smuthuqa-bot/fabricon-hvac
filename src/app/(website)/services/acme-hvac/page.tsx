import ServicesHero from "@/components/services/ServicesHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import { acmeHvacServices } from "@/data/services";

export const metadata = {
  title: "ACME HVAC Services | HVAC Engineering",
  description:
    "ACME HVAC system supply, installation, testing, commissioning and support services.",
};

export default function AcmeHvacServicesPage() {
  return (
    <main>
      <ServicesHero
        eyebrow="ACME HVAC SERVICES"
        title="Comfortable Spaces for a Better Tomorrow."
        description="Complete HVAC solutions with efficient planning, industry best practices and practical execution."
        image="/images/acme-hvac/hvac-solutions.jpg"
        accent="green"
      />

      <ServiceOverview
        eyebrow="Our HVAC Solutions"
        title="Complete HVAC capabilities from system to support."
        description="ACME HVAC is equipped with project managers, project engineers and project supervisors for supply, installation, testing and commissioning of HVAC products, including low-side contracts and customer support."
        services={acmeHvacServices}
        accent="green"
      />

      <section className="section-padding bg-[var(--fabricon-soft)]">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">
              Building Applications
            </span>

            <h2 className="heading-lg mt-5">
              HVAC expertise across key environments.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Commercial Buildings",
              "Industrial Buildings",
              "Hospital Buildings",
            ].map((sector) => (
              <div
                key={sector}
                className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-8 text-center"
              >
                <h3 className="text-xl font-black text-[var(--fabricon-navy)]">
                  {sector}
                </h3>

                <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-[#22C55E]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}