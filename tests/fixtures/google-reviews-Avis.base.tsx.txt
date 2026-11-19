import Link from "next/link";
import { Container, Eyebrow, Note, Stars } from "../ui";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

export function Avis() {
  return (
    <section className="border-y border-line bg-sand py-20">
      <Container>
        <Eyebrow>Avis clients</Eyebrow>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="font-serif text-[4.5rem] font-light leading-none">{site.rating}</span>
            <div>
              <Stars />
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">{site.reviewCount} avis sur Google</p>
            </div>
          </div>
          <Link href={site.googleUrl} className="self-start border border-ink/30 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-ink hover:text-cream md:self-auto">
            Lire la fiche Google ↗
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.title} className="border border-line bg-cream p-6">
              <Stars className="text-xs" />
              <h3 className="mt-4 text-lg font-normal">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{r.text}</p>
            </figure>
          ))}
        </div>
        <Note className="mt-6 max-w-[34rem]">Synthèse des avis publiés sur Google par les clients de l'atelier. Les citations originales seront intégrées après accord [À COMPLÉTER].</Note>
      </Container>
    </section>
  );
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
