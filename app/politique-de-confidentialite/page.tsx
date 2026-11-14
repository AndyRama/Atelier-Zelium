import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Page() {
  return (
    <section className="pb-24 pt-36 md:pt-44">
      <Container>
        <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] leading-[1.05]">Politique de confidentialité</h1>
        <p className="mt-6 max-w-[34rem] text-body">[À COMPLÉTER] Contenu juridique à rédiger avec l'atelier (éditeur, hébergeur, traitement des données du formulaire).</p>
      </Container>
    </section>
  );
}
