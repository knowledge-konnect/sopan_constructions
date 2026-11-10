/**
 * EmailJS configuration.
 * Set these in the project environment (they are public, browser-safe IDs —
 * never put your EmailJS *private* key here):
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 */
export const emailjsConfig = {
  serviceId: import.meta.env['VITE_EMAILJS_SERVICE_ID'] as string | undefined,
  templateId: import.meta.env['VITE_EMAILJS_TEMPLATE_ID'] as string | undefined,
  publicKey: import.meta.env['VITE_EMAILJS_PUBLIC_KEY'] as string | undefined,
};

export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
);
