import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const businesses = [
  {
    name: "FABRICON",
    title: "POWER INFRASTRUCTURE SOLUTIONS",
    description: "Engineering solutions for power infrastructure and related project requirements.",
    href: "/businesses/fabricon",
    image: "/images/fabricon/power-infrastructure.jpg",
    accent: "blue",
  },
  {
    name: "acmehvac",
    title: "COMFORT WITH CONFIDENCE",
    description: "HVAC system design, supply, installation, chilled water systems, ventilation, ducting, service and maintenance.",
    href: "/businesses/acme-hvac",
    image: "/images/acme-hvac/hvac-solutions.jpg",
    accent: "green",
  },
] as const;

export default function BusinessOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="section-kicker">Our Businesses</span>
              <h2 className="heading-lg mt-5 max-w-2xl">
                Two specialist businesses. One connected engineering platform.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {businesses.map((business, index) => (
            <Reveal key={business.name} delay={index * 0.08}>
              <Link
                href={business.href}
                className="group relative block min-h-[330px] overflow-hidden rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={business.image}
                    alt={`${business.name} business`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15" />
                </div>

                <div className="relative z-10 flex min-h-[330px] max-w-xl flex-col justify-between p-7 md:p-9">
                  <div>
                    <div className={`text-xl font-black tracking-[-.04em] ${business.accent === "green" ? "text-[var(--fabricon-green)]" : "text-[var(--fabricon-blue)]"}`}>
                      {business.name}
                    </div>
                    <h3 className="mt-5 max-w-md text-3xl font-black leading-tight tracking-[-.035em] text-[var(--fabricon-navy)] md:text-4xl">
                      {business.title}
                    </h3>
                    <p className="body-md mt-5 max-w-md text-[var(--fabricon-text)]">
                      {business.description}
                    </p>
                  </div>

                  <span className={`mt-8 inline-flex w-fit items-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-white ${business.accent === "green" ? "bg-[var(--fabricon-green)]" : "bg-[var(--fabricon-navy)]"}`}>
                    Explore {business.name === "FABRICON" ? "Fabricon" : "ACME HVAC"}
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
