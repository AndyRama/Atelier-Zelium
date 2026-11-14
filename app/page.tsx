import { Hero, TrustBar } from "@/components/home/Hero";
import { SavoirFaire } from "@/components/home/SavoirFaire";
import { Atelier } from "@/components/home/Atelier";
import { RealisationsPreview } from "@/components/home/RealisationsPreview";
import { Methode } from "@/components/home/Methode";
import { Equipe } from "@/components/home/Equipe";
import { Avis, Cabinet } from "@/components/home/Avis";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SavoirFaire />
      <Atelier />
      <RealisationsPreview />
      <Methode />
      <Equipe />
      <Avis />
      <Cabinet />
      <Contact />
    </>
  );
}
