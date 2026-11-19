import Image from "next/image";
import { Button, Container, Eyebrow, SectionTitle } from "../ui";
import { plans, projects } from "@/lib/content";

const included = [
  "Parc machines professionnel (liste précise communiquée sur demande)",
  "Établis, servantes, rangements et stock de chutes",
  "Accompagnement par Ben si besoin, sans jamais faire à votre place",
  "Espace bureau et coworking sur place",
];

export function Atelier() {
  const mobilierPhoto = projects.find((project) => project.category === "Mobilier");
  return (
    <section id="atelier" className="scroll-mt-20 bg-ink py-24 text-cream md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[6fr_6fr] md:gap-16">
          <div className="border-l border-cream/20 pl-6 md:pl-8">
            <Eyebrow className="!text-cream/50">Une charpente, une histoire</Eyebrow>
            <h3 className="mt-6 max-w-[12em] text-3xl leading-tight">Un ancien entrepôt devenu lieu de fabrication.</h3>
            <div className="mt-6 space-y-5 leading-[1.75] text-cream/75">
              <p>La réhabilitation de ce vieil entrepôt, tour à tour atelier de charpentier puis hangar de stockage, met en valeur la vieille charpente existante. Le volume qu’elle abrite reçoit aujourd’hui l’atelier et les machines : la structure ancienne reste au cœur du lieu de travail.</p>
              <p>Entre l’entrepôt et la rue, un petit bâtiment initialement en rez-de-chaussée sert de quai de chargement. Il a été rehaussé de bureaux de conception, reliant ainsi les espaces où les projets se dessinent à ceux où ils se fabriquent.</p>
            </div>
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

        <div data-workshop-spaces="" className="mt-14 grid items-center gap-8 border-t border-cream/15 pt-10 md:grid-cols-[5fr_7fr] md:gap-12">
          <figure data-workshop-photo="" className="relative aspect-[4/5] overflow-hidden rounded-md">
            {mobilierPhoto && <Image src={mobilierPhoto.image} alt={mobilierPhoto.alt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />}
          </figure>
          <div data-workshop-description="">
            <h3 className="text-2xl">Des espaces pour les outils et les idées.</h3>
            <div className="mt-5 grid gap-5 leading-relaxed text-cream/75">
              <p>Au rez-de-chaussée, un parc de machines est mis à disposition, avec des établis et des espaces de stockage pour les métiers du bois, de l’acier et du fer. Les postes de travail et les rangements prennent place dans le volume de l’atelier.</p>
              <p>À l’étage, des bureaux fermés accueillent les coworkers et leurs ordinateurs, photographies, montres et dessins. La conception et la fabrication trouvent chacune leur espace, sans quitter ce lieu partagé.</p>
            </div>
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
