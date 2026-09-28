import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import FabriconAbout from "@/components/about/FabriconAbout";
import Management from "@/components/about/Management";
import Capabilities from "@/components/about/Capabilities";
import Principles from "@/components/about/Principles";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Fabricon",
  description:
    "Learn about FABRICON and ACME HVAC, their engineering capabilities, management and areas of expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <FabriconAbout />
      <Management />
      <Capabilities />
      <Principles />
      <AboutCTA />
    </main>
  );
}
