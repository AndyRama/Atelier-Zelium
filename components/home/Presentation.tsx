import { Button, Container, Eyebrow, SectionTitle } from "../ui";

export function Presentation() {
  return (
    <section id="presentation" className="scroll-mt-20 border-b border-line bg-cream py-20 md:py-24">
      <Container className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-20">
        <div>
          <Eyebrow>Un lieu, plusieurs métiers</Eyebrow>
          <SectionTitle className="mt-6 max-w-[11em]">Un lieu pour fabriquer, créer et transmettre.</SectionTitle>
        </div>
        <div className="max-w-[36rem] space-y-5 leading-[1.75] text-body">
          <p>Au cœur de Bordeaux, l’atelier ZEL!UM est une structure multidisciplinaire centrée autour d’un atelier de création de décors, de costumes et d’accessoires pour le théâtre, le cinéma et les spectacles vivants. La fabrication y réunit des pratiques et des regards différents, au sein d’un même lieu de travail.</p>
          <p>Lieu de fabrication autant que d’échange, Zelium fait se rencontrer les savoir-faire ancestraux et alternatifs. Cette dimension collective prolonge le travail de menuiserie et d’agencement présenté ici : à côté des pièces sur mesure, l’atelier accueille des métiers, des outils et des façons de créer qui se nourrissent les uns les autres.</p>
          <Button href="/#atelier" variant="outline">Explorer le lieu et ses espaces</Button>
        </div>
      </Container>
    </section>
  );
}
