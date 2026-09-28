import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  { title: "RMZ Millenia Business Park — Cooling Tower Pipeline Retrofit Work", image: "/images/projects/rmz-cooling-tower.jpg" },
  { title: "RMZ Millenia Business Park — Duct Work", image: "/images/projects/rmz-duct-work.jpg" },
  { title: "VWF (York) — IAMPL", image: "/images/projects/vwf-york-iampl.jpg" },
  { title: "Fujitsu India Pvt Ltd", image: "/images/projects/fujitsu-india.jpg" },
];

export default function ProjectsPreview() {
  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="section-kicker">Projects</span>
              <h2 className="heading-xl mt-5">Selected project experience.</h2>
            </div>
            <Link href="/projects" className="btn btn-outline shrink-0">View Projects <ArrowUpRight size={16} /></Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="group relative min-h-[290px] overflow-hidden rounded-2xl border border-[var(--fabricon-line)] bg-[var(--fabricon-navy)]">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,18,35,.96)] via-[rgba(3,18,35,.35)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                  <div className="text-xs font-black uppercase tracking-[0.15em] text-[var(--fabricon-blue)]">0{index + 1}</div>
                  <h3 className="mt-3 max-w-xl text-xl font-bold leading-7">{project.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
