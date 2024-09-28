import HeroSection from "../components/hero";
import Beneficios from "../components/beneficios";
import TestimoniosSection from "../components/testimonios";
import Vsl from "../components/vsl";
import Nosotros from "../components/nosotros";
import Proceso from "../components/proceso";
import Agenda from "../components/agenda";
import Faqs from "../components/faqs";
import Footer from "../components/footer";
import HeroSectionA from '../components/heroTest';
import VslA from "../components/vslA";

export default function Home() {
  return (
    <main>
      {/* <HeroSection/> */}
      <HeroSectionA/>
      <VslA/>
      <TestimoniosSection/>
      <Nosotros/>
      <Proceso/>
      <Agenda/>
      <Faqs/>
      <Footer/>
    </main>
  );
}
