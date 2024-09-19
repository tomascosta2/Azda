import HeroSection from "../components/hero";
import Beneficios from "../components/beneficios";
import TestimoniosSection from "../components/testimonios";
import Vsl from "../components/vsl";
import Nosotros from "../components/nosotros";
import Proceso from "../components/proceso";
import Agenda from "../components/agenda";
import Faqs from "../components/faqs";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      {/* <HeroSection/> */}
      <HeroSection/>
      <Vsl/>
      <TestimoniosSection/>
      <Nosotros/>
      <Proceso/>
      <Agenda/>
      <Faqs/>
      <Footer/>
    </main>
  );
}
