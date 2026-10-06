import BusinessHero from "@/components/business/BusinessHero";
import { businesses } from "@/data/businesses";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "FABRICON | Power Infrastructure Solutions",
  description:
    "FABRICON power infrastructure and electrical contracting solutions.",
};

export default function FabriconBusinessPage() {
  const business = businesses.fabricon;

  return (
    <main>
      <BusinessHero
        eyebrow={business.eyebrow}
        title={business.title}
        description={business.description}
        image={business.image}
        accent="orange"
      />

      <section
        id="capabilities"
        className="section-padding bg-white"
      >
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-kicker">
                FABRICON Capabilities
              </span>

              <h2 className="heading-lg mt-5">
                Electrical infrastructure built around dependable execution.
              </h2>

              <p className="body-md mt-5">
                FABRICON's published scope covers electrical contracting
                activities across power infrastructure, from installation
                through testing, commissioning and ongoing support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {business.capabilities.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-6"
                >
                  <span className="text-sm font-black text-[#FB5501]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-5 flex gap-3">
                    <Check
                      size={19}
                      className="mt-1 shrink-0 text-[#FB5501]"
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
            Sectors
          </span>

          <h2 className="heading-lg mt-5">
            Supporting critical power environments.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {business.sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-2xl border border-[var(--fabricon-line)] bg-white p-7"
              >
                <h3 className="text-lg font-black text-[var(--fabricon-navy)]">
                  {sector}
                </h3>

                <div className="mt-5 h-1 w-10 rounded-full bg-[#FB5501]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FB5501] py-16">
        <div className="container-x flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
              Planning a power infrastructure project?
            </h2>

            <p className="mt-2 text-white/80">
              Talk to our team about your engineering requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-black/80"
          >
            Contact FABRICON
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}