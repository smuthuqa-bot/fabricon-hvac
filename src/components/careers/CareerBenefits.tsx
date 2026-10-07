import {
  Award,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";
import { careerBenefits } from "@/data/careers";

const icons = [
  TrendingUp,
  Award,
  GraduationCap,
  ShieldCheck,
];

export default function CareerBenefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="section-kicker">Why Join Us?</span>

            <h2 className="heading-lg mt-5">
              Grow with a team built around engineering excellence.
            </h2>

            <p className="body-md mt-5">
              We bring together engineering, project execution and technical
              expertise across power infrastructure and HVAC.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {careerBenefits.map((benefit, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={benefit.number} delay={index * 0.06}>
                <div className="group h-full rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-soft)] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FB5501]/10 text-[#FB5501]">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-black text-black/20">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-[var(--fabricon-navy)]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}