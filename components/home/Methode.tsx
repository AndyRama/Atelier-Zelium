import Image from "next/image";
import { Container, Eyebrow, SectionTitle } from "../ui";
import { steps } from "@/lib/content";

export function Methode() {
  return (
    <section className="bg-sand py-24 md:py-28">
      <Container className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow>La méthode</Eyebrow>
          <SectionTitle className="mt-6 max-w-[8.2em]">Quatre étapes, du premier café à la dernière plinthe.</SectionTitle>
          <ol className="mt-10 border-b border-line">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[4rem_1fr] border-t border-line py-6">
                <span className="font-serif text-xl font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-normal">{s.title}</h3>
                  <p className="mt-2 max-w-[26rem] text-sm leading-relaxed text-body">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <figure className="self-end">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/google-maps/atelier-zelium-14.jpg" alt="Détail d’une façade ajourée aux motifs géométriques" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-[11px] text-muted">« Le bon geste, c'est celui qu'on peut répéter mille fois sans se blesser. »</figcaption>
        </figure>
      </Container>
    </section>
  );
}
