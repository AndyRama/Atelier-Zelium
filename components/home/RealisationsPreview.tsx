import Link from "next/link";
import { Container, Eyebrow, Note, SectionTitle } from "../ui";
import { ProjectCard } from "../ProjectCard";
import { projects } from "@/lib/content";

export function RealisationsPreview() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 border-b border-line pb-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Réalisations</Eyebrow>
            <SectionTitle className="mt-4">Les savoir-faire de l’atelier.</SectionTitle>
          </div>
          <Link href="/realisations" className="text-[10px] font-medium uppercase tracking-[0.18em] text-body transition-colors hover:text-ink">
            Toutes les réalisations →
          </Link>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Note className="mt-10">Photographies réelles de l’atelier. Les catégories illustrent les savoir-faire et ne constituent pas des références de chantiers identifiés sur ces images.</Note>
      </Container>
    </section>
  );
}
