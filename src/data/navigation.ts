export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Businesses",
    href: "/businesses",
    dropdown: [
      {
        label: "FABRICON",
        href: "/businesses/fabricon",
        description: "Industrial and engineering solutions",
      },
      {
        label: "ACME HVAC",
        href: "/businesses/acme-hvac",
        description: "HVAC engineering and services",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "FABRICON Services",
        href: "/services/fabricon",
        description: "Engineering and industrial services",
      },
      {
        label: "ACME HVAC Services",
        href: "/services/acme-hvac",
        description: "HVAC supply, installation and commissioning",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Quality & Safety",
    href: "/quality-safety",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;