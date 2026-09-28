import Link from "next/link";
import { ArrowUpRight, Fan, Gauge, Layers3, Settings2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { title: "HVAC Supply & Installation", text: "Supply, installation, testing and commissioning of HVAC products.", icon: Settings2 },
  { title: "Chilled Water Systems", text: "Air-cooled and water-cooled systems, AHU packages, pumps and related systems.", icon: Gauge },
  { title: "Air Distribution", text: "Ducts, fans, diffusers, VAV/VCD and associated air-distribution components.", icon: Fan },
  { title: "Insulation & Testing", text: "Insulation works, duct cleaning and duct leakage testing capabilities.", icon: Layers3 },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="section-kicker">Services</span>
              <h2 className="heading-xl mt-5">Specialist services for demanding environments.</h2>
            </div>
            <Link href="/services" className="btn btn-outline shrink-0">View All Services <ArrowUpRight size={16} /></Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="card card-hover h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--fabricon-soft-blue)] text-[var(--fabricon-blue)]"><Icon size={22} /></div>
                  <h3 className="mt-8 text-xl font-bold tracking-tight">{service.title}</h3>
                  <p className="body-md mt-4 text-[var(--fabricon-muted)]">{service.text}</p>
                  <Link href="/services/acme-hvac" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--fabricon-navy)] hover:text-[var(--fabricon-blue)]">Explore service <ArrowUpRight size={15} /></Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
