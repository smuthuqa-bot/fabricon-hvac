import { ArrowUpRight } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function Management() {
  return (
    <section className="section-padding bg-soft">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-kicker">
            Management
          </span>

          <h2 className="heading-lg mt-6">
            Leadership with technical experience.
          </h2>

          <p className="body-md text-muted mt-5">
            Experienced leadership supporting technical
            direction, project execution and sustainable
            organizational growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {aboutContent.management.map((person) => (
            <article
              key={person.name}
              className="card card-hover group p-7"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-5 h-1 w-12 bg-[var(--fabricon-blue)] transition-all duration-300 group-hover:w-20" />

                  <h3 className="heading-md">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--fabricon-green)]">
                    {person.role}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-[var(--fabricon-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--fabricon-blue)]"
                />
              </div>

              <p className="body-md mt-7 text-muted">
                {person.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}