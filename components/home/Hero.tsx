import Image from "next/image";
import { Button, Container, Stars } from "../ui";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink text-cream">
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[68%]">
        <Image src="/images/hero.png" alt="Établi de l'atelier, rabots et planches de bois en lumière rasante" fill priority sizes="(min-width: 768px) 68vw, 100vw" className="object-cover object-right" />
        <div className="absolute inset-0 bg-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/35 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>

      <Container className="pt-2">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream/65">
          Menuiserie & agencement — {site.address[0]}, Bordeaux
        </p>
        <h1 className="mt-6 max-w-[9.8em] text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.04] tracking-[-0.02em]">
          Le sur-mesure, fait main, au cœur de Bordeaux.
        </h1>
        <p className="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-cream/80">
          Cuisines, bibliothèques, escaliers, agencements : nous dessinons et fabriquons dans notre atelier de la rue de Bègles. Et nous ouvrons nos établis à ceux qui veulent travailler le bois.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#contact" variant="light">Demander un devis</Button>
          <Button href="/#atelier" variant="outline-light">Découvrir l'atelier</Button>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-cream/15 py-5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/70">
          <span className="flex items-center gap-2">
            <Stars className="!tracking-normal" /> {site.rating}/5 — {site.reviewCount} avis Google
          </span>
          <span aria-hidden className="text-cream/45">↓ Faites défiler</span>
        </div>
      </Container>
    </section>
  );
}

export function TrustBar() {
  const items = [
    `★ ${site.rating}/5 · ${site.reviewCount} avis Google`,
    `Bordeaux — ${site.address[0]}`,
    "Menuiserie sur mesure & agencement",
    "Atelier partagé à la demande",
  ];
  return (
    <div className="border-b border-line bg-sand">
      <Container className="flex flex-wrap gap-x-10 gap-y-2 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-body">
        {items.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </Container>
    </div>
  );
}
