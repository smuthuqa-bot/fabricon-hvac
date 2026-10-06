"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { businesses } from "@/data/businesses";

export default function BusinessCards() {
  const cards = [
    {
      ...businesses.fabricon,
      accent: "orange" as const,
    },
    {
      ...businesses.acmeHvac,
      accent: "green" as const,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">Our Businesses</span>

            <h2 className="heading-lg mt-5">
              Two specialist businesses.
              <br />
              One connected engineering platform.
            </h2>

            <p className="body-md mt-5 max-w-2xl">
              From power infrastructure to HVAC engineering, our businesses
              provide specialist capabilities for demanding project
              environments.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {cards.map((business, index) => {
            const isFabricon = business.accent === "orange";

            return (
              <Reveal key={business.name} delay={index * 0.1}>
                <article className="group overflow-hidden rounded-3xl border border-[var(--fabricon-line)] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative h-[280px] overflow-hidden bg-black">
                    <Image
                      src={business.image}
                      alt={business.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    <div className="absolute bottom-6 left-6">
                      <span
                        className={`text-2xl font-black tracking-[-0.04em] ${
                          isFabricon
                            ? "text-[#FB5501]"
                            : "text-[#22C55E]"
                        }`}
                      >
                        {business.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <span
                      className={`text-xs font-black uppercase tracking-[0.18em] ${
                        isFabricon
                          ? "text-[#FB5501]"
                          : "text-[#22C55E]"
                      }`}
                    >
                      {business.eyebrow}
                    </span>

                    <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[var(--fabricon-navy)]">
                      {business.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--fabricon-muted)]">
                      {business.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {business.capabilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm font-medium text-[var(--fabricon-ink)]"
                        >
                          <Check
                            size={17}
                            className={`mt-0.5 shrink-0 ${
                              isFabricon
                                ? "text-[#FB5501]"
                                : "text-[#22C55E]"
                            }`}
                          />

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={business.href}
                      className={`mt-8 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-white transition ${
                        isFabricon
                          ? "bg-[#FB5501] hover:bg-[#E94D00]"
                          : "bg-[#22C55E] hover:bg-[#16A34A]"
                      }`}
                    >
                      Explore {business.name}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}