import { GoogleReviews } from "./GoogleReviews";
import { Container, Note } from "../ui";

export function Avis() {
  return <GoogleReviews />;
}

export function Cabinet() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 border border-line p-6 md:grid-cols-[18.5rem_1fr] md:p-8">
          <div>
            <div className="aspect-[3/2] overflow-hidden bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/maa.jpg" alt="Maquette d'architecte et plans roulés sur une table de travail" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Le cabinet qui partage les murs</p>
            <p className="mt-2 font-serif text-2xl font-light leading-snug">MAA – Margaux Agnès Architecte</p>
          </div>
          <div>
            <p className="max-w-[32rem] leading-relaxed text-body">
              L'atelier partage son adresse avec un cabinet d'architecture. Architectes et menuisiers se croisent, se passent les plans, se donnent un coup de main : les projets se dessinent et se fabriquent au même endroit.
            </p>
            <Note className="mt-4">Site et réalisations du cabinet à ajouter [À COMPLÉTER].</Note>
          </div>
        </div>
      </Container>
    </section>
  );
}
