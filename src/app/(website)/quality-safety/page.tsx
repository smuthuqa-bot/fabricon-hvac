import QualitySafetyHero from "@/components/quality-safety/QualitySafetyHero";
import QualityPrinciples from "@/components/quality-safety/QualityPrinciples";
import QualityPolicies from "@/components/quality-safety/QualityPolicies";
import QualityCTA from "@/components/quality-safety/QualityCTA";

export const metadata = {
  title: "Quality & Safety | FABRICON & ACME HVAC",
  description:
    "Quality-focused engineering and safe project execution across FABRICON and ACME HVAC.",
};

export default function QualitySafetyPage() {
  return (
    <main>
      <QualitySafetyHero />
      <QualityPrinciples />
      <QualityPolicies />
      <QualityCTA />
    </main>
  );
}