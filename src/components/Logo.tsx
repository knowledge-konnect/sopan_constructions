import { Link } from "@tanstack/react-router";

type Props = { variant?: "light" | "dark"; size?: "md" | "lg" };

/**
 * LogoMark — geometric gold "S" built from three architectural beams inside a
 * navy plate. Stays legible down to 16px (favicon / WhatsApp avatar).
 */
export function LogoMark({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-hidden focusable="false" className={className}>
      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        rx="12"
        fill={onDark ? "color-mix(in oklab, white 10%, transparent)" : "var(--color-primary)"}
        stroke={onDark ? "color-mix(in oklab, var(--color-gold) 45%, transparent)" : "none"}
        strokeWidth={onDark ? 1.5 : 0}
      />
      {/* blocky S: top beam → left riser → middle beam → right riser → bottom beam */}
      <path
        d="M12 11h24v5H12zM12 16h5v6h-5zM12 21.5h24v5H12zM31 26.5h5v6h-5zM12 32h24v5H12z"
        fill="var(--color-gold)"
      />
    </svg>
  );
}

export function Logo({ variant = "dark", size = "md" }: Props) {
  const isLight = variant === "light";
  const sizeClass =
    size === "lg"
      ? "h-[3.4rem] w-auto sm:h-[4rem] md:h-[4.7rem] lg:h-[5.2rem]"
      : "h-[2.4rem] w-auto sm:h-[2.8rem] md:h-[3.1rem] lg:h-[3.4rem]";

  return (
    <Link
      to="/"
      className="flex min-w-0 max-w-[42vw] items-center gap-2.5 sm:gap-3 group"
      aria-label="Sopan Constructions home"
    >
      <span className="shrink-0 flex max-w-full items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.04]">
        <img
          src="/sopan-logo.svg"
          alt="Sopan Constructions and Infra Developers"
          width={260}
          height={110}
          className={`block ${sizeClass} max-w-full object-contain`}
          style={isLight ? { filter: "brightness(0) saturate(0) invert(1)" } : undefined}
        />
      </span>
    </Link>
  );
}
