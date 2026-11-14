import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[10px] font-medium uppercase tracking-[0.22em] text-muted ${className}`}>{children}</p>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`tracking-[0.12em] text-gold ${className}`}>
      ★★★★★
    </span>
  );
}

const variants = {
  solid: "bg-ink text-cream hover:bg-ink/85 rounded-md",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream rounded-md",
  light: "bg-cream text-ink hover:bg-white rounded-md",
  "outline-light": "border border-cream/40 text-cream hover:bg-cream hover:text-ink rounded-md",
} as const;

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] rounded-md transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] tracking-[-0.015em] ${className}`}>{children}</h2>
  );
}

export function Note({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs leading-relaxed text-muted ${className}`}>{children}</p>;
}
