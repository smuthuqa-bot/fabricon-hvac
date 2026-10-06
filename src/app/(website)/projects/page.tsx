import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import FabriconPortfolio from "@/components/projects/FabriconPortfolio";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Projects | FABRICON & ACME HVAC",
  description:
    "Explore project experience across power infrastructure and HVAC engineering.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />

      <ProjectGrid />

      <FabriconPortfolio />

      <ProjectsCTA />
    </main>
  );
}