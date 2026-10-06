"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectFilters, projects } from "@/data/projects";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.company === activeFilter ||
        project.category === activeFilter ||
        project.type === activeFilter,
    );
  }, [activeFilter]);

  return (
    <section className="section-padding bg-[var(--fabricon-soft)]">
      <div className="container-x">
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                  active
                    ? "bg-[var(--fabricon-navy)] text-white"
                    : "border border-[var(--fabricon-line)] bg-white text-[var(--fabricon-muted)] hover:border-[var(--fabricon-navy)] hover:text-[var(--fabricon-navy)]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-[var(--fabricon-line)] bg-white p-12 text-center">
            <p className="text-sm font-semibold text-[var(--fabricon-muted)]">
              No projects available for this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}