import type { Metadata } from "next";
import { Container, Eyebrow, Note } from "@/components/ui";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Cuisines, bibliothèques, escaliers, dressings, mobilier et agencements : les savoir-faire de l’atelier Zélium à Bordeaux, illustrés par des photographies réelles du lieu.",
};

export default function RealisationsPage() {
  return (
    <section className="pb-24 pt-36 md:pb-32 md:pt-44">
      <Container>
        <Eyebrow>Réalisations</Eyebrow>
        <h1 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em]">Le bois, pièce par pièce.</h1>
        <p className="mb-10 mt-5 max-w-[34rem] text-[17px] leading-relaxed text-body">
          Les familles de savoir-faire de l’atelier, illustrées par des photographies réelles du lieu : espaces de travail, établis et charpente.
        </p>
        <ProjectsGrid />
        <Note className="mt-16 max-w-[34rem] border-t border-line pt-6">
          Photographies de l’atelier issues de sa fiche Google Maps. Les catégories et descriptions présentent des exemples de savoir-faire, pas des chantiers identifiés sur ces photos.
        </Note>
      </Container>
    </section>
  );
}
