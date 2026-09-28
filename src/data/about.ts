export const aboutPage = {
  hero: {
    eyebrow: "ABOUT US",
    title: "Two Businesses. One Purpose.",
    description:
      "Engineering capabilities across power infrastructure and HVAC, with a focus on quality, reliable execution and long-term client value.",
  },

  fabricon: {
    name: "FABRICON",
    eyebrow: "POWER INFRASTRUCTURE",
    title: "Electrical Infrastructure & Contracting",
    story:
      "FABRICON is a Kuwait-based electrical contracting company focused on electricity transmission and distribution. Its published scope includes substation equipment installation, EHV cable route surveys, civil design drawings, cable installation, jointing and terminations, testing and commissioning, maintenance and troubleshooting services.",
    objective:
      "To provide electrical utilities with professional solutions supported by skilled workmen and standard-quality service, while keeping up to date with technological advancements and industry standards. FABRICON also states its focus on quality, service, reliability and cost-saving turnkey solutions.",
    vision:
      "To grow through quality services, a professional attitude, strong technical solutions, marketing and business development, with the aim of building a strong position in the industry.",
    capabilities: [
      "Substation equipment installation",
      "EHV / HV cable route surveys",
      "Power cable installation, jointing & terminations",
      "Civil works and design drawings",
      "Testing & commissioning",
      "Maintenance & troubleshooting",
    ],
    sectors: ["Utility Stations", "Power Plants", "Industrial Substations", "Desalination Stations"],
  },

  acme: {
    name: "ACME HVAC",
    eyebrow: "HVAC ENGINEERING & SERVICES",
    title: "Planned HVAC Solutions. Practical Execution.",
    story:
      "ACME HVAC, previously known as ACME Services, was established in December 2019 at its present base in Chennai, India. The company also has services in Andhra Pradesh, Karnataka and Telangana, with the stated objective of providing HVAC solutions through efficient planning, industry best practices and affordable pricing.",
    management: [
      {
        name: "Mr. Nagaraj G.",
        role: "Managing Director",
        bio:
          "A well-known personality in the HVAC field with 30+ years of experience. He provides technical assistance and direction to support sustainable growth for the organization.",
      },
      {
        name: "Mr. Thayalan Nagamuthu",
        role: "Director (Canada)",
        bio: "Director listed in the ACME HVAC company profile.",
      },
    ],
    capabilities: [
      "Project management",
      "Project engineering",
      "Project supervision",
      "Supply and installation",
      "Testing & commissioning",
      "Low-side contracts",
      "Customer support",
    ],
    sectors: ["Commercial Buildings", "Industrial Buildings", "Hospital Buildings"],
  },

  principles: [
    { title: "Quality", text: "Quality-focused execution and service." },
    { title: "Safety", text: "Safe working practices across project activities." },
    { title: "Reliability", text: "Dependable engineering and technical support." },
    { title: "Customer Focus", text: "Solutions planned around client requirements." },
  ],
} as const;
