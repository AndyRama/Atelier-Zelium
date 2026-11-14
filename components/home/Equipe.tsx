import Image from "next/image";
import { Container, Eyebrow, Note, SectionTitle } from "../ui";

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-20 py-24 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/images/equipe.jpg" alt="Établi avec carnet de croquis, ciseaux à bois, tablier en cuir et tasse de café" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <Eyebrow>L'équipe</Eyebrow>
          <SectionTitle className="mt-6">Ben, et l'atelier autour.</SectionTitle>
          <div className="mt-6 max-w-[30rem] space-y-4 leading-[1.75] text-body">
            <p>Ben fait tourner la maison : la machine, le plan, la pose, et surtout l'accueil. Les clients le décrivent comme quelqu'un de sympathique et investi — c'est aussi ce qu'on cherche à être ici : disponible, précis, sans chichis.</p>
            <p>L'atelier partage le lieu avec un cabinet d'architecture. Architectes et menuisiers se croisent, se passent les plans, se donnent un coup de main. C'est comme ça que le lieu vit — et c'est ce que les clients remarquent en premier.</p>
          </div>
          <blockquote className="mt-8 max-w-[30rem] border-l-2 border-gold pl-4">
            <p className="font-serif text-xl font-light italic leading-snug">« Un lieu atypique, vivant et lumineux, plein de bois et de belles rencontres. »</p>
            <footer className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Extrait d'avis Google</footer>
          </blockquote>
          <Note className="mt-8">Portrait et parcours de Ben à compléter [À COMPLÉTER].</Note>
        </div>
      </Container>
    </section>
  );
}
