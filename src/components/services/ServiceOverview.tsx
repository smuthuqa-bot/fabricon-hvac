"use client";

import Reveal from "@/components/home/Reveal";
import ServiceCard from "./ServiceCard";

interface ServiceOverviewProps {
  eyebrow: string;
  title: string;
  description: string;
  services: readonly {
    number: string;
    title: string;
    description: string;
    items: readonly string[];
    image: string;
  }[];
  accent: "orange" | "green";
}

export default function ServiceOverview({
  eyebrow,
  title,
  description,
  services,
  accent,
}: ServiceOverviewProps) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span
              className={`text-xs font-black uppercase tracking-[0.2em] ${
                accent === "orange"
                  ? "text-[#FB5501]"
                  : "text-[#22C55E]"
              }`}
            >
              {eyebrow}
            </span>

            <h2 className="heading-lg mt-5">{title}</h2>

            <p className="body-md mt-5 max-w-2xl">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              {...service}
              accent={accent}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}