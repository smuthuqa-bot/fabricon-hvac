import { Building2, CalendarDays, MapPin } from "lucide-react";
import { aboutContent } from "@/data/about";

export default function CompanyStory() {
  return (
    <section
      id="our-story"
      className="section-padding bg-white"
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="section-kicker">
              {aboutContent.story.eyebrow}
            </span>

            <h2 className="heading-lg mt-6">
              {aboutContent.story.title}
            </h2>

            <div className="mt-8 h-1 w-16 bg-[var(--fabricon-green)]" />
          </div>

          <div>
            <div className="space-y-6">
              {aboutContent.story.paragraphs.map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className="body-lg text-[var(--fabricon-text)]"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <CalendarDays
                  size={20}
                  className="text-[var(--fabricon-blue)]"
                />

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--fabricon-muted)]">
                  Established
                </p>

                <p className="mt-1 text-lg font-bold">
                  December 2019
                </p>
              </div>

              <div className="card p-5">
                <MapPin
                  size={20}
                  className="text-[var(--fabricon-green)]"
                />

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--fabricon-muted)]">
                  Present Base
                </p>

                <p className="mt-1 text-lg font-bold">
                  Chennai, India
                </p>
              </div>

              <div className="card p-5">
                <Building2
                  size={20}
                  className="text-[var(--fabricon-blue)]"
                />

                <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--fabricon-muted)]">
                  Service Regions
                </p>

                <p className="mt-1 text-lg font-bold">
                  South India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}