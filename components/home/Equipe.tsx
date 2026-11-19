import Image from "next/image";
import { Container, Eyebrow, Note, SectionTitle } from "../ui";

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-20 py-24 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/images/google-maps/atelier-zelium-09.jpg" alt="Vue d’un espace de travail partagé de l’atelier" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div>
          <Eyebrow>L'équipe</Eyebrow>
          <SectionTitle className="mt-6">Ben, et l'atelier autour.</SectionTitle>
          <div className="mt-6 max-w-[30rem] space-y-4 leading-[1.75] text-body">
            <p>Ben fait tourner la maison : la machine, le plan, la pose, et surtout l'accueil. Les clients le décrivent comme quelqu'un de sympathique et investi — c'est aussi ce qu'on cherche à être ici : disponible, précis, sans chichis.</p>
            <p>L'atelier partage le lieu avec un cabinet d'architecture. Architectes et menuisiers se croisent, se passent les plans, se donnent un coup de main. C'est comme ça que le lieu vit — et c'est ce que les clients remarquent en premier.</p>
            <p>Le collectif est un doux mélange de travailleurs de tout horizon : menuisiers, graphistes, serruriers, photographes, ferronniers, horlogers et architectes. Chacun apporte ses pratiques à ce lieu commun, où les métiers se côtoient au quotidien.</p>
            <p>À midi, tous se retrouvent dans la cuisine, qui fait parfois office de salle de réunion. Le repas est préparé par une personne volontaire : tour à tour, chacun cuisine pour tous, dans une atmosphère gaie et détendue. La devise de Zelium : bienveillance et bonne humeur !</p>
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
