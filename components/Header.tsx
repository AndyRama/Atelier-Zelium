"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export function phoneHref(phone: string): string | undefined {
  if (!/^0[1-9](?:[ .-]?\d{2}){4}$/.test(phone)) return undefined;
  return `tel:+33${phone.replace(/[ .-]/g, "").slice(1)}`;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Transparent et clair par-dessus le hero de l'accueil, crème dès qu'on scrolle ou sur les autres pages.
  const overHero = pathname === "/" && !scrolled && !open;

  const telephone = phoneHref(site.phone);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        overHero ? "border-transparent text-cream" : "border-line bg-cream/90 text-ink backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        <div className="flex items-baseline gap-3">
          <Logo />
          <span className="hidden text-[9px] uppercase tracking-[0.2em] opacity-60 sm:inline">Bordeaux</span>
        </div>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[10px] font-medium uppercase tracking-[0.18em] opacity-75 transition-opacity hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`px-5 py-3 text-[10px] font-medium uppercase rounded-md tracking-[0.16em] transition-colors ${
              overHero ? "bg-cream text-ink hover:bg-white" : "bg-ink text-cream hover:bg-ink/85"
            }`}
          >
            Demander un devis 
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-[10px] font-medium uppercase tracking-[0.18em] lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="mobile-navigation overflow-y-auto border-t border-line bg-cream px-6 pb-8 pt-4 text-ink lg:hidden">
          <ul className="divide-y divide-line">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-4 font-serif text-xl">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
    <nav aria-label="Actions mobiles" className="mobile-actions fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-line bg-cream px-4 pt-3 text-[11px] font-medium lg:hidden">
      <Link href="/#contact" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-md bg-ink px-3 text-cream">RDV atelier</Link>
      {telephone ? (
        <a href={telephone} className="flex min-h-12 items-center justify-center rounded-md border border-ink px-3 text-ink">Téléphone</a>
      ) : (
        <button type="button" disabled aria-label="Numéro à venir" title="Numéro à venir" className="flex min-h-12 flex-col items-center justify-center rounded-md border border-line px-3 text-ink/60">
          Téléphone <span className="text-[10px]">{site.phone}</span>
        </button>
      )}
    </nav>
    </>
  );
}
