import Link from "next/link";
import { Container, Eyebrow, Note, Stars } from "../ui";
import { googleReviews } from "@/lib/google-reviews";

const dates = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function GoogleReviews() {
  return (
    <section id="avis-google" aria-label="Avis Google Maps" className="border-y border-line bg-sand py-20">
      <Container>
        <Eyebrow>Avis Google Maps</Eyebrow>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="font-serif text-[4.5rem] font-light leading-none">
              {googleReviews.rating.toLocaleString("fr-FR")}
            </span>
            <div>
              <Stars />
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                {googleReviews.rating.toLocaleString("fr-FR")} sur 5 · {googleReviews.reviewCount} avis sur Google
              </p>
            </div>
          </div>
          <Link href={googleReviews.placeUrl} target="_blank" rel="noopener noreferrer" className="self-start rounded-md border border-ink/30 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-ink hover:text-cream md:self-auto">
            Voir tous les avis sur Google ↗
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.reviews.map((review) => (
            <figure key={review.id} data-google-review={review.id} className="flex flex-col gap-5 rounded-md border border-line bg-cream p-6">
              <div>
                <span className="sr-only">{review.rating} étoiles sur 5</span>
                <Stars className="text-xs" />
              </div>
              <blockquote className="flex-1 whitespace-pre-line text-sm leading-relaxed text-body">
                {review.text}
              </blockquote>
              <figcaption className="flex flex-col gap-1 border-t border-line pt-4">
                <span className="text-sm font-medium">{review.author}</span>
                <time dateTime={review.published_at} className="text-xs text-muted">
                  {dates.format(new Date(review.published_at))}
                </time>
                <Link href={review.url} target="_blank" rel="noopener noreferrer" className="mt-2 w-fit text-xs underline underline-offset-4">
                  Lire cet avis sur Google ↗
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
        <Note className="mt-6 max-w-[44rem]">
          Sélection de {googleReviews.reviews.length} avis publiés sur Google Maps, reproduits avec leurs dates de publication.
          Note et nombre d’avis relevés le {dates.format(new Date(googleReviews.collectedAt))}.
        </Note>
      </Container>
    </section>
  );
}
