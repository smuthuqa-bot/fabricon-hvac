import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import Management from "@/components/about/Management";
import Capabilities from "@/components/about/Capabilities";
import Industries from "@/components/about/Industries";
import Presence from "@/components/about/Presence";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <CompanyStory />

      <Management />

      <Capabilities />

      <Industries />

      <Presence />

      <AboutCTA />
    </main>
  );
}