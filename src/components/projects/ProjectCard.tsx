import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/home/Reveal";

interface ProjectCardProps {
  project: {
    title: string;
    company: string;
    location: string;
    category: string;
    type: string;
    tags: readonly string[];
    description: string;
    image: string | null;
    accent: string;
  };
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group h-full overflow-hidden rounded-2xl border border-[var(--fabricon-line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden bg-[var(--fabricon-soft)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} - ${project.location}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--fabricon-navy)] to-[var(--fabricon-blue-dark)]">
              <span className="text-5xl font-black text-white/10">
                PROJECT
              </span>
            </div>
          )}

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[var(--fabricon-navy)] shadow-lg">
              {project.company}
            </span>
          </div>
        </div>

        <div className="p-7">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--fabricon-muted)]">
            <MapPin size={14} className="text-[var(--fabricon-green)]" />
            {project.location}
          </div>

          <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[var(--fabricon-navy)]">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--fabricon-muted)]">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--fabricon-soft)] px-3 py-1.5 text-[11px] font-bold text-[var(--fabricon-navy)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-[var(--fabricon-line)] pt-5">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--fabricon-muted)]">
              {project.category}
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--fabricon-soft)] text-[var(--fabricon-navy)] transition group-hover:bg-[var(--fabricon-navy)] group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}