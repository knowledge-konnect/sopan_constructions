import apartment from "@/assets/project-apartment.jpg";
import team from "@/assets/project-team.jpg";
import townhouse from "@/assets/project-townhouse.jpg";
import villa from "@/assets/project-villa.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: "Residential" | "Apartment" | "Commercial" | "Renovation";
  status: "Reference";
  year: string;
  area: string;
  scope: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "residential-house-construction",
    name: "Independent House Construction",
    location: "",
    type: "Residential",
    status: "Reference",
    year: "",
    area: "",
    scope: "Custom residential construction, structural detailing and practical finishing for new homes.",
    image: villa,
    description: "Reference imagery for residential home construction work and design direction.",
  },
  {
    slug: "apartment-building-project",
    name: "Residential Apartment Construction",
    location: "",
    type: "Apartment",
    status: "Reference",
    year: "",
    area: "",
    scope: "Apartment layouts, multi-storey structural planning and common-area focused building work.",
    image: apartment,
    description: "Reference imagery for apartment construction and residential building work.",
  },
  {
    slug: "duplex-home-project",
    name: "Duplex Home Planning",
    location: "",
    type: "Residential",
    status: "Reference",
    year: "",
    area: "",
    scope: "Residential planning for duplex homes, family spaces and efficient home layouts.",
    image: townhouse,
    description: "Illustrative reference for duplex home planning and residential design ideas.",
  },
  {
    slug: "renovation-and-remodelling",
    name: "House Renovation & Remodeling",
    location: "",
    type: "Renovation",
    status: "Reference",
    year: "",
    area: "",
    scope: "Kitchen, bathroom and home renovation improvements with updated finishes and practical layout changes.",
    image: team,
    description: "Reference imagery for home renovation and remodeling work.",
  },
  {
    slug: "apartment-facade-upgrade",
    name: "Apartment Facade & Exterior Upgrades",
    location: "",
    type: "Apartment",
    status: "Reference",
    year: "",
    area: "",
    scope: "Exterior finishing improvements, façade upgrades and practical residential enhancement work.",
    image: apartment,
    description: "Reference imagery for apartment exterior upgrades and residential finishing work.",
  },
  {
    slug: "residential-remodel-project",
    name: "Residential Remodeling & Upgrades",
    location: "",
    type: "Renovation",
    status: "Reference",
    year: "",
    area: "",
    scope: "Layout improvements, upgrades and finishing work for residential spaces and home improvements.",
    image: villa,
    description: "Illustrative reference for residential remodeling and upgrading projects.",
  },
];

export const realValue = (v?: string) => (v && v.trim() ? v : undefined);
