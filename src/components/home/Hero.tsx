"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Snowflake, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "500+", label: "Projects Completed" },
  { value: "2", label: "Strategic Businesses" },
  { value: "100%", label: "Client Satisfaction" },
];
const highlights = [
  { icon: Zap, label: "Power", sub: "Infrastructure" },
  { icon: Snowflake, label: "HVAC", sub: "Solutions" },
  { icon: CheckCircle2, label: "Design", sub: "Installation" },
  { icon: CheckCircle2, label: "Testing &", sub: "Commissioning" },
  { icon: CheckCircle2, label: "Support", sub: "& Maintenance" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-112px)] overflow-hidden bg-[var(--fabricon-dark)] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/fabricon-hero.jpeg"
          alt="Engineering infrastructure and HVAC environment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,35,.96)_0%,rgba(5,25,46,.82)_43%,rgba(5,25,46,.45)_72%,rgba(3,18,35,.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,18,35,.88)_0%,transparent_45%,rgba(3,18,35,.25)_100%)]" />
      </div>

      <div className="container-x relative z-10 flex min-h-[calc(100vh-112px)] items-center py-20 lg:py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--fabricon-blue)]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Integrated Engineering Solutions
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[.9] tracking-[-.055em]">
              BUILDING
              <br />
              <span className="text-[var(--fabricon-blue)]">A SMARTER</span>
              <br />
              TOMORROW
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
              From power infrastructure to comfortable spaces — FABRICON and
              ACME HVAC deliver complete engineering solutions for a better,
              safer and more sustainable future.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/businesses" className="btn btn-primary">
                Explore Our Businesses
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="btn border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-2 border-t border-white/15 pt-7 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`px-4 py-2 first:pl-0 ${index > 0 ? "border-l border-white/20" : ""}`}
                >
                  <div className="text-3xl font-black tracking-tight md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-xs leading-5 text-white/65">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="space-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black/10">
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-sm text-white/60">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
