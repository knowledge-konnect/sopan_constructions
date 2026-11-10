import { site, waHref } from "@/lib/site";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Props = { variant?: "full" | "compact"; className?: string; defaultService?: string };
type Errors = Record<string, string>;

const constructionTypes = [
  "Residential Construction",
  "Apartment Construction",
  "Planning & Design",
  "Renovation & Remodeling",
  "Other Enquiry",
];
const contactMethods = ["Phone", "WhatsApp", "Email"];

const initialValues = {
  name: "",
  phone: "",
  email: "",
  location: "",
  type: "",
  contactMethod: "Phone",
  budget: "",
  details: "",
};

type Values = typeof initialValues;

export function QuoteForm({ variant = "full", className = "", defaultService = "" }: Props) {
  const [values, setValues] = useState<Values>({ ...initialValues, type: defaultService });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string>("");
  const sending = useRef(false);

  useEffect(() => {
    if (defaultService && !values.type) {
      setValues((current) => ({ ...current, type: defaultService }));
    }
  }, [defaultService, values.type]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function buildWhatsAppMessage(v: Values, submittedAt: string): string {
    const customerLines = [
      "*CUSTOMER DETAILS*",
      "",
      `- Name: ${v.name.trim()}`,
      `- Mobile: ${v.phone.trim()}`,
      ...(v.email.trim() ? [`- Email: ${v.email.trim()}`] : []),
    ];

    const requirementsLines = [
      "*SERVICE REQUIREMENTS*",
      "",
      `- Service: ${v.type}`,
      ...(v.location.trim() ? [`- Location: ${v.location.trim()}`] : []),
      ...(v.contactMethod.trim() ? [`- Preferred Contact: ${v.contactMethod.trim()}`] : []),
      ...(v.budget.trim() ? [`- Budget: ${v.budget.trim()}`] : []),
    ];

    const messageContent = v.details.trim();
    const messageLines = messageContent ? ["", "*MESSAGE*", "", messageContent] : [];

    return [
      `Hello ${site.name} Team,`,
      "",
      "I would like to enquire about your services.",
      "",
      ...customerLines,
      "",
      ...requirementsLines,
      ...messageLines,
      "",
      `- Submitted: ${submittedAt} IST`,
      "",
      "Please contact me regarding my enquiry.",
      "",
      "Thank you.",
    ].join("\n");
  }

  function validate(v: Values): Errors {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[+]?\d[\d\s-]{9,14}$/.test(v.phone.trim())) e.phone = "Enter a valid mobile number (10–15 digits).";
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Enter a valid email address.";
    if (v.location.trim() && v.location.trim().length < 2) e.location = "Enter a valid preferred location.";
    if (!v.type) e.type = "Select an interested service.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (sending.current) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }

    sending.current = true;
    setStatus("loading");

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    try {
      const url = waHref(buildWhatsAppMessage(values, submittedAt));
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) throw new Error("popup-blocked");
      setSentUrl(url);
      setValues({ ...initialValues, type: defaultService });
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
      setErrors({
        form: `We couldn't send your enquiry just now. Please try again, or call us on ${site.phone}.`,
      });
    } finally {
      sending.current = false;
    }
  }

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-3.5 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-primary transition";
  const errCls = "border-destructive focus:border-destructive focus:ring-destructive/30";
  const field = (k: string) => `mt-1.5 ${inputCls} ${errors[k] ? errCls : ""}`;
  const Err = ({ k }: { k: string }) =>
    errors[k] ? (
      <span className="mt-1.5 flex items-start gap-1.5 text-sm text-destructive">
        <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" /> {errors[k]}
      </span>
    ) : null;

  if (status === "success") {
    return (
      <div className={`card-base p-8 text-center ${className}`} role="status" aria-live="polite">
        <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
        <h3 className="heading-lg mt-3 text-primary">Almost done!</h3>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          WhatsApp should now be open with your prefilled enquiry. Please press Send in WhatsApp to complete your enquiry.
        </p>
        <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-primary mt-4 inline-flex text-sm">
          WhatsApp did not open? Tap here
        </a>
        <button onClick={() => setStatus("idle")} className="btn-ghost-primary mt-6 text-sm">
          Submit another enquiry
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={onSubmit} noValidate className={`card-base p-6 sm:p-8 space-y-5 ${className}`}>
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{errors.form || "Please correct the highlighted fields and try again."}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Full Name *</span>
          <input name="name" value={values.name} onChange={set("name")} maxLength={80} className={field("name")} placeholder="Your full name" aria-invalid={!!errors.name} />
          <Err k="name" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Mobile Number *</span>
          <input name="phone" value={values.phone} onChange={set("phone")} inputMode="tel" className={field("phone")} placeholder="+91 9XXXXXXXXX" aria-invalid={!!errors.phone} />
          <Err k="phone" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {variant === "full" && (
          <label className="block">
            <span className="text-sm font-semibold text-foreground/80">Email</span>
            <input type="email" name="email" value={values.email} onChange={set("email")} maxLength={120} className={field("email")} placeholder="you@example.com" aria-invalid={!!errors.email} />
            <Err k="email" />
          </label>
        )}
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Preferred Location</span>
          <input name="location" value={values.location} onChange={set("location")} maxLength={120} className={field("location")} placeholder="Your preferred area or locality" aria-invalid={!!errors.location} />
          <Err k="location" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-foreground/80">Interested Service *</span>
          <select name="type" value={values.type} onChange={set("type")} className={field("type")} aria-invalid={!!errors.type}>
            <option value="">Select an option</option>
            {constructionTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <Err k="type" />
        </label>
      </div>

      {variant === "full" && (
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-sm font-semibold text-foreground/80">Preferred Contact Method</span>
            <select name="contactMethod" value={values.contactMethod} onChange={set("contactMethod")} className={`mt-1.5 ${inputCls}`}>
              {contactMethods.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-foreground/80">Budget Range</span>
            <select name="budget" value={values.budget} onChange={set("budget")} className={`mt-1.5 ${inputCls}`}>
              <option value="">Select budget</option>
              <option>Below ₹25 Lakhs</option>
              <option>₹25–50 Lakhs</option>
              <option>₹50 Lakhs–1 Crore</option>
              <option>Above ₹1 Crore</option>
              <option>Not Decided</option>
            </select>
          </label>
        </div>
      )}

      <label className="block">
        <span className="text-sm font-semibold text-foreground/80">Message / Requirements</span>
        <textarea name="details" value={values.details} onChange={set("details")} rows={variant === "full" ? 4 : 3} maxLength={1500} className={`mt-1.5 ${inputCls}`} placeholder="Tell us about your construction or design requirement..." />
      </label>

      <button type="submit" disabled={loading} className="btn-primary w-full !py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Get a Free Quote"
        )}
      </button>
      <p className="text-sm text-muted-foreground text-center leading-relaxed">
        Your details are shared through your own WhatsApp message and used only to respond to your enquiry.
      </p>

    </form>
  );
}
