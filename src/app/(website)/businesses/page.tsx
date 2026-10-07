import BusinessHero from "@/components/business/BusinessHero";
import BusinessCards from "@/components/business/BusinessCards";
import SharedCommitment from "@/components/business/SharedCommitment";
import { businesses } from "@/data/businesses";

export const metadata = {
  title: "Our Businesses | FABRICON",
  description:
    "Explore FABRICON power infrastructure and ACME HVAC engineering solutions.",
};

export default function BusinessesPage() {
  return (
    <main>
      <BusinessHero
        eyebrow="OUR BUSINESSES"
        title="Two Specialized Divisions. Greater Impact."
        description="From power infrastructure to comfortable spaces, FABRICON and ACME HVAC deliver specialist engineering capabilities for demanding project environments."
        image={businesses.fabricon.image}
        accent="orange"
      />

      <BusinessCards />

      <SharedCommitment />
    </main>
  );
}