import { Container, Eyebrow, SectionTitle } from "../ui";
import { ContactForm } from "../ContactForm";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

const small = "flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-muted";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24 pt-8 md:pb-32">
      <Container>
        <Eyebrow>Contact</Eyebrow>
        <SectionTitle className="mt-4">Parlons de votre projet.</SectionTitle>
        <p className="mt-5 max-w-[40rem] text-[17px] leading-relaxed text-body">
          Un projet, une question, une envie d'atelier ? Décrivez-nous ce que vous avez en tête : un croquis ou deux photos nous font gagner beaucoup de temps. Devis gratuit et sans engagement.
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.35fr_1fr]">
          <ContactForm />

          <aside className="space-y-9">
            <div>
              <p className={small}>L'atelier</p>
              <p className="mt-3 font-serif text-xl font-normal leading-snug">
                {site.address[0]}
                <br />
                {site.address[1]}
              </p>
              <p className="mt-1 text-xs text-muted">{site.district}</p>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block border-b border-gold pb-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                Voir l'itinéraire
              </a>
            </div>

            <div>
              <p className={small}>Horaires</p>
              <dl className="mt-3 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-line py-2 first:pt-0">
                    <dt>{h.day}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted">Horaires à confirmer avec l'atelier [À COMPLÉTER]</p>
            </div>

            <div>
              <p className={small}>Nous joindre</p>
              <ul className="mt-3 space-y-2 text-sm text-body">
                <li>Téléphone {site.phone}</li>
                <li>Email {site.email}</li>
              </ul>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden border border-line bg-sand">
              <iframe
                title="Carte : Atelier Zélium, 5 rue de Bègles, Bordeaux"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.5]"
              />
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 bg-ink px-4 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-cream">
                Itinéraire
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
