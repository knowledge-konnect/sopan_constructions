export const site = {
  name: "SOPAN Constructions and Infra Developers",
  legalName: "SOPAN Constructions and Infra Developers",
  tagline: "YOUR DREAMS. OUR COMMITMENT.",
  phone: "+91 77803 87486",
  phoneTel: "+917780387486",
  whatsappNumber: "917780387486",
  email: "info@sopanconstructions.in",
  address: {
    line1: "11-27/2/8, SV Towers",
    line2: "Bhagathsingh Nagar, Gopalapatnam, Visakhapatnam, Andhra Pradesh - 530027",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    pin: "530027",
    country: "India",
  },
};

export const navigationItems = [
  { label: "Home", to: "/", sectionId: "home" },
  { label: "About", to: "/about", sectionId: "about" },
  { label: "Services", to: "/services", sectionId: "services" },
  { label: "Projects", to: "/projects", sectionId: "projects" },
  { label: "Why Us", to: "/#why-us", sectionId: "why-us" },
  { label: "Contact", to: "/contact", sectionId: "contact" },
] as const;

export const phoneHref = `tel:${site.phoneTel}`;
export const waHref = (msg = "Hello SOPAN Constructions and Infra Developers, I would like to know more about your services.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const mailHref = (subject = "Website enquiry") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
