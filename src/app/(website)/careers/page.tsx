import CareersHero from "@/components/careers/CareersHero";
import CareerBenefits from "@/components/careers/CareerBenefits";
import CareerOpenings from "@/components/careers/CareerOpenings";
import CareersCTA from "@/components/careers/CareersCTA";

export const metadata = {
  title: "Careers | FABRICON & ACME HVAC",
  description:
    "Explore career opportunities with FABRICON and ACME HVAC.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareerBenefits />
      <CareerOpenings />
      <CareersCTA />
    </main>
  );
}