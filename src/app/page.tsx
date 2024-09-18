import HeroSection from "./components/hero";
import Beneficios from "./components/beneficios";
import TestimoniosSection from "./components/testimonios";
import Vsl from "./components/vsl";
import Nosotros from "./components/nosotros";
import Proceso from "./components/proceso";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Vsl/>
      <TestimoniosSection/>
      <Nosotros/>
      <Proceso/>
    </main>
  );
}
