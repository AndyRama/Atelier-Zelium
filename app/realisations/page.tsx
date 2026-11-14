import type { Metadata } from "next";
import { Container, Eyebrow, Note } from "@/components/ui";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Cuisines, bibliothèques, escaliers, dressings, mobilier et agencements : quelques familles de projets passées par l'atelier de menuiserie Zélium à Bordeaux.",
};

export default function RealisationsPage() {
  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <Eyebrow>Réalisations</Eyebrow>
        <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em]">Le bois, pièce par pièce.</h1>
        <p className="mb-10 mt-5 max-w-[34rem] text-[17px] leading-relaxed text-body">
          Quelques familles de projets passées par l'atelier, et la façon dont nous les abordons : le dessin, le choix de l'essence, l'assemblage, la pose.
        </p>
        <ProjectsGrid />
        <Note className="mt-16 max-w-[34rem] border-t border-line pt-6">
          Photographies d'illustration. Les fiches seront remplacées par les projets réels de l'atelier — photos, lieux, essences et années — dès réception [À COMPLÉTER].
        </Note>
      </Container>
    </section>
  );
}
