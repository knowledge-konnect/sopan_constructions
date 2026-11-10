import { z } from "zod";

export const constructionTypes = [
  "Residential Construction",
  "Apartment Construction",
  "Planning & Design",
  "Renovation & Remodeling",
  "Other Enquiry",
] as const;

export const contactMethods = ["Phone", "WhatsApp", "Email"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?\d[\d\s-]{9,14}$/, "Enter a valid mobile number (10–15 digits)."),
  email: z
    .string()
    .trim()
    .max(120)
    .email("Enter a valid email address.")
    .optional()
    .or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  constructionType: z.enum(constructionTypes, {
    message: "Select an interested service.",
  }),
  preferredContact: z.enum(contactMethods).default("Phone"),
  projectDetails: z.string().trim().max(1500).optional().or(z.literal("")),
  source: z.string().trim().max(60).optional(),
  /** Honeypot — must stay empty. */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
