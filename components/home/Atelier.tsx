import Image from "next/image";
import { Button, Container, Eyebrow, SectionTitle } from "../ui";
import { plans } from "@/lib/content";

const included = [
  "Parc machines professionnel (liste précise communiquée sur demande)",
  "Établis, servantes, rangements et stock de chutes",
  "Accompagnement par Ben si besoin, sans jamais faire à votre place",
  "Espace bureau et coworking sur place",
];

export function Atelier() {
  return (
    <section id="atelier" className="scroll-mt-20 bg-ink py-24 text-cream md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[6fr_6fr] md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/atelier.jpg" alt="Trois personnes au travail sur des établis dans l'atelier" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow className="!text-cream/50">L'atelier, à la demande</Eyebrow>
            <SectionTitle className="mt-6 max-w-[8.6em]">Un atelier partagé au cœur de Bordeaux.</SectionTitle>
            <p className="mt-6 max-w-[30rem] leading-relaxed text-cream/75">
              La porte est ouverte aux menuisiers, aux architectes, aux bricoleurs exigeants et aux entreprises qui ont besoin d'un vrai établi. On y vient pour une demi-journée, une journée ou un mois.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-cream/90">
              {included.map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="text-cream/50">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid divide-y divide-cream/15 border border-cream/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {plans.map((p) => (
            <div key={p.title} className="p-6 md:p-7">
              <h3 className="text-[22px] font-normal">{p.title}</h3>
              <p className="mt-3 text-sm text-gold">[Tarif à compléter]</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/50">{p.unit}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-[30rem] text-sm leading-relaxed text-cream/55">
            Les formules et tarifs définitifs sont en cours de finalisation [À COMPLÉTER]. Écrivez-nous : on vous répond avec les conditions du moment.
          </p>
          <Button href="/#contact" variant="light">Réserver une visite</Button>
        </div>
      </Container>
    </section>
  );
}
