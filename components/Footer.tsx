import Link from "next/link";
import { Container, Stars } from "./ui";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Le site",
    links: [
      ["Savoir-faire", "/#savoir-faire"],
      ["Atelier & coworking", "/#atelier"],
      ["Nos locaux", "/realisations"],
      ["L'équipe", "/#equipe"],
      ["Contact", "/#contact"],
    ],
  },
  {
    title: "L'atelier",
    links: [
      ["Atelier à la demande", "/#atelier"],
      ["Coworking & bureaux", "/#atelier"],
      ["Nos locaux", "/realisations"],
      ["Itinéraire", "/#contact"],
    ],
  },
  {
    title: "Contact",
    links: [
      [`Téléphone ${site.phone}`, "/#contact"],
      [`Email ${site.email}`, "/#contact"],
      ["Formulaire de devis", "/#contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div>
          <Logo className="text-[24px]" />
          <p className="mt-5 text-sm leading-relaxed text-cream/65">
            {site.tagline}
            <br />
            {site.address[0]}
            <br />
            {site.address[1]}
          </p>
          <p className="mt-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
            <Stars className="!tracking-normal" />
            <span>
              {site.rating}/5 · {site.reviewCount} avis Google
            </span>
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-cream/50">{c.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-3 py-6 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/55 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Atelier Zélium — Bordeaux</p>
          <p className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-cream">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-cream">Politique de confidentialité</Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
