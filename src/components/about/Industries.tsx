import {
  Building2,
  Factory,
  Hospital,
} from "lucide-react";

import { aboutContent } from "@/data/about";

const icons = [
  Building2,
  Factory,
  Hospital,
];

export default function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <div className="text-center">
          <span className="section-kicker">
            Industries
          </span>

          <h2 className="heading-lg mt-6">
            Built for demanding environments.
          </h2>

          <p className="body-md text-muted mx-auto mt-5 max-w-2xl">
            HVAC capabilities supporting commercial,
            industrial and hospital building applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutContent.industries.map(
            (industry, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={industry}
                  className="card card-hover group relative overflow-hidden p-8"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 bg-[var(--fabricon-soft-blue)] [clip-path:polygon(100%_0,100%_100%,0_0)] transition-transform duration-300 group-hover:scale-125" />

                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="relative z-10 text-[var(--fabricon-blue)]"
                  />

                  <h3 className="heading-md relative z-10 mt-8">
                    {industry}
                  </h3>

                  <div className="mt-7 h-px w-full bg-[var(--fabricon-line)]" />

                  <div className="mt-5 h-1 w-10 bg-[var(--fabricon-green)] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}