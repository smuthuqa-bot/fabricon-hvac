"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  items: readonly string[];
  image: string;
  accent: "orange" | "green";
  index: number;
}

export default function ServiceCard({
  number,
  title,
  description,
  items,
  image,
  accent,
  index,
}: ServiceCardProps) {
  const isOrange = accent === "orange";

  return (
    <Reveal delay={index * 0.06}>
      <article className="group overflow-hidden rounded-3xl border border-[var(--fabricon-line)] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-black lg:min-h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <span
              className={`absolute left-6 top-6 text-5xl font-black tracking-[-0.06em] ${
                isOrange ? "text-[#FB5501]" : "text-[#22C55E]"
              }`}
            >
              {number}
            </span>
          </div>

          <div className="p-7 md:p-9">
            <span
              className={`text-xs font-black uppercase tracking-[0.18em] ${
                isOrange ? "text-[#FB5501]" : "text-[#22C55E]"
              }`}
            >
              Service {number}
            </span>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-[var(--fabricon-navy)] sm:text-3xl">
              {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--fabricon-muted)]">
              {description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--fabricon-ink)]"
                >
                  <Check
                    size={16}
                    className={`mt-0.5 shrink-0 ${
                      isOrange
                        ? "text-[#FB5501]"
                        : "text-[#22C55E]"
                    }`}
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 flex items-center gap-2 text-sm font-bold ${
                isOrange ? "text-[#FB5501]" : "text-[#22C55E]"
              }`}
            >
              Specialist engineering service
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}