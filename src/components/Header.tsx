import { navigationItems } from "@/lib/site";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  // Close the mobile menu on navigation or Escape
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-section]"));
      const sectionInView = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      setActiveSection(sectionInView?.dataset.navSection ?? null);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isItemActive = (to: string, sectionId?: string) => {
    const isHomeRoute = location.pathname === "/";
    // On the home page the highlight follows scroll position (a leftover #hash must not stick).
    if (isHomeRoute) {
      return sectionId === "home" ? !activeSection || activeSection === "home" : sectionId === activeSection;
    }
    return to !== "/" && to === location.pathname;
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-background border-b border-border/80 shadow-[0_1px_0_color-mix(in_oklab,var(--color-primary)_5%,transparent)]"
        : "bg-background border-b border-transparent"
        }`}
    >
      <div
        className="container-x flex items-center gap-4 h-16 sm:h-[66px] lg:h-[78px]"
      >
        <Link to="/" aria-label="Sopan Constructions home" className="shrink-0">
          <img
            src="/sopan-logo.svg"
            alt="SOPAN Constructions and Infra Developers"
            width={2200}
            height={900}
            className="block w-[124px] sm:w-[136px] lg:w-[168px] xl:w-[184px] h-auto object-contain"
          />
        </Link>

        <div className="hidden lg:ml-auto lg:flex items-center gap-5">
          <nav className="flex items-center gap-0.5 xl:gap-1">
            {navigationItems.map((item) => {
              const active = isItemActive(item.to, item.sectionId);

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={"hash" in item ? item.hash : undefined}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-xl px-3 xl:px-3.5 py-2.5 text-[13px] xl:text-[14px] font-medium tracking-[0.01em] transition-all duration-200 ${active ? "bg-gold text-primary shadow-[0_8px_20px_-12px_rgba(212,160,23,0.8)] ring-1 ring-gold/80" : "text-foreground/70 hover:text-primary hover:bg-primary/5"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/quote"
            className="btn-primary text-[13px] lg:text-[14px]"
            style={{ padding: "0.7rem 1.25rem" }}
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-primary hover:bg-surface transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container-x py-5 flex flex-col gap-1">
            {navigationItems.map((item) => {
              const active = isItemActive(item.to, item.sectionId);

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={"hash" in item ? item.hash : undefined}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 px-3 rounded-xl text-sm font-medium transition-colors ${active ? "bg-gold text-primary font-semibold shadow-[0_8px_20px_-12px_rgba(212,160,23,0.8)] ring-1 ring-gold/80" : "text-foreground/85 hover:bg-surface"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-3 border-t border-border">
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
