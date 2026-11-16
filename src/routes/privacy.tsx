import { SiteShell } from "@/components/SiteShell";
import { mailHref, phoneHref, site } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SOPAN Constructions" },
      { name: "description", content: "How SOPAN Constructions and Infra Developers collects, uses and protects the information you share through this website." },
      { property: "og:title", content: "Privacy Policy | SOPAN Constructions" },
      { property: "og:url", content: "https://sopanconstructions.in/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you use the quote or contact form, you may enter your name, mobile number, preferred location, the service you are interested in, and a message describing your requirement. Your email address is collected only if you choose to provide it.",
      "If you call, email or message us on WhatsApp directly, we receive the details you share with us in that conversation.",
    ],
  },
  {
    title: "How the quote form works",
    body: [
      "The form on this website does not store your details on our website server. When you submit it, the details are placed into a WhatsApp message that you send to us yourself. We receive them only when you send that message.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the details you share only to respond to your enquiry, discuss your project, prepare estimates and follow up with you about the work you asked about. We do not sell your information or use it for unrelated marketing.",
    ],
  },
  {
    title: "Sharing your information",
    body: [
      "We do not share your details with third parties, except where needed to deal with your enquiry (for example, with a professional working with us on your project) or where the law requires it.",
      "Messages you send through WhatsApp are handled by WhatsApp under its own terms and privacy policy.",
    ],
  },
  {
    title: "Cookies and website data",
    body: [
      "This website does not use advertising or tracking cookies. Our hosting provider may keep standard technical logs (such as IP address and browser type) to keep the site secure and working. If we add website analytics in future, we will update this page.",
    ],
  },
  {
    title: "How long we keep your information",
    body: [
      "We keep enquiry details for as long as needed to deal with your enquiry and any resulting project, and for a reasonable period afterwards for our records.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to tell you what information we hold about you, to correct it, or to delete it. To do so, contact us using the details below and we will respond as soon as we reasonably can.",
    ],
  },
  {
    title: "Changes to this policy",
    body: ["We may update this policy from time to time. The date at the top of this page shows when it was last changed."],
  },
];

function Privacy() {
  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-20">
          <span className="eyebrow">Legal</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Privacy Policy</h1>
          <p className="mt-4 text-white/75">Last updated: November 2026</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            This policy explains how {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles the information you share
            through this website.
          </p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-bold text-primary">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
            <div>
              <h2 className="font-display text-xl font-bold text-primary">Contact us</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {site.legalName}, {site.address.line1}, {site.address.line2}.
              </p>
              <p className="mt-2 text-muted-foreground">
                Email:{" "}
                <a href={mailHref("Privacy enquiry")} className="font-semibold text-primary hover:text-gold-text break-all">{site.email}</a>
                {" · "}Phone:{" "}
                <a href={phoneHref} className="font-semibold text-primary hover:text-gold-text">{site.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
