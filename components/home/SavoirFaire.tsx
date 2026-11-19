import Image from "next/image";
import { Button, Container, Eyebrow, SectionTitle } from "../ui";
import { services } from "@/lib/content";

export function SavoirFaire() {
  return (
    <section id="savoir-faire" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-[5fr_7fr] md:gap-20">
          <div>
            <Eyebrow>Savoir-faire</Eyebrow>
            <SectionTitle className="mt-6 max-w-[8.4em]">Sept familles de pièces, une même exigence.</SectionTitle>
            <p className="mt-6 max-w-[26rem] leading-[1.75] text-body">
              Le bois se choisit, se lit, se laisse sécher. On dessine au plus juste, on assemble pour que ça tienne cent ans, on ajuste sur place. Rien d'industriel : chaque pièce est faite pour un lieu précis.
            </p>
            <div className="relative mt-10 aspect-[7/10] max-w-[30rem] overflow-hidden bg-sand">
              <Image src="/images/google-maps/atelier-zelium-12.jpg" alt="Enseigne Atelier Zélium gravée sur une façade en pierre" fill sizes="(min-width: 768px) 30rem, 100vw" className="object-cover" />
            </div>
          </div>

          <ol className="border-b border-line">
            {services.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] border-t border-line py-7">
                <span className="pt-2 text-[10px] font-medium tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-normal leading-snug">{s.title}</h3>
                  <p className="mt-2 max-w-[30rem] text-[15px] leading-relaxed text-body">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="max-w-[28rem] text-sm leading-relaxed text-body">
            L'atelier travaille à Bordeaux et dans la métropole : Mérignac, Pessac, Talence, Bègles, Le Bouscat, Gradignan. Chaque projet commence par une visite et un relevé de mesures.
          </p>
          <Button href="/#contact" variant="outline">Parler de mon projet</Button>
        </div>
      </Container>
    </section>
  );
}
