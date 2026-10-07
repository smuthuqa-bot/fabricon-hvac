import BusinessHero from "@/components/business/BusinessHero";
import { businesses } from "@/data/businesses";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "ACME HVAC | HVAC Engineering & Services",
  description:
    "ACME HVAC engineering, installation, testing, commissioning and support services.",
};

export default function AcmeHvacBusinessPage() {
  const business = businesses.acmeHvac;

  return (
    <main>
      <BusinessHero
        eyebrow={business.eyebrow}
        title={business.title}
        description={business.description}
        image={business.image}
        accent="green"
      />

      <section
        id="capabilities"
        className="section-padding bg-white"
      >
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-kicker">
                ACME HVAC Capabilities
              </span>

              <h2 className="heading-lg mt-5">
                Practical HVAC engineering from planning to support.
              </h2>

              <p className="body-md mt-5">
                ACME HVAC provides project management, engineering,
                supervision, supply, installation, testing, commissioning,
                low-side contracts and customer support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {business.capabilities.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-6"
                >
                  <span className="text-sm font-black text-[#22C55E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-5 flex gap-3">
                    <Check
                      size={19}
                      className="mt-1 shrink-0 text-[#22C55E]"
                    />

                    <h3 className="font-bold text-[var(--fabricon-navy)]">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--fabricon-soft)]">
        <div className="container-x">
          <span className="section-kicker">
            Applications
          </span>

          <h2 className="heading-lg mt-5">
            HVAC expertise across key building environments.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {business.sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-8"
              >
                <h3 className="text-xl font-black text-[var(--fabricon-navy)]">
                  {sector}
                </h3>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#22C55E]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#22C55E] py-16">
        <div className="container-x flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
              Looking for HVAC engineering support?
            </h2>

            <p className="mt-2 text-white/80">
              Discuss your HVAC project requirements with ACME HVAC.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--fabricon-navy)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-black"
          >
            Contact ACME HVAC
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}