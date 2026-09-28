import Hero from "@/components/home/Hero";
import BusinessOverview from "@/components/home/BusinessOverview";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Capabilities from "@/components/home/Capabilities";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ClientsPreview from "@/components/home/ClientsPreview";
import QualitySafety from "@/components/home/QualitySafety";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BusinessOverview />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <Capabilities />
      <ProjectsPreview />
      <ClientsPreview />
      <QualitySafety />
      <ContactCTA />
    </main>
  );
}
