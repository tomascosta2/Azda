import Header from "./header";
import MovingSpan from "./movingSpan";
import Cta from './cta';
import BeneficiosPrincipales from "./beneficiosPrincipales";

export default function HeroSectionA() {
	return (
		<div className="relative">
			<Header/>
			<div className="h-full pb-[60px] overflow-hidden">
				<img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/azda-banner-bg.webp" alt="Azda" />
				<section className="relative z-40 max-w-[1200px] mx-auto pt-[60px] lg:pt-[50px] px-4">
					<span className="block mx-auto --sora text-[18px] lg:text-[22px] font-semibold text-center text-white/80">¿que tu facturación mensual sea variable no te deja estar tranquilo?</span>
					<h1 className="text-center text-[36px] lg:text-[56px] tracking-tight font-extrabold leading-[110%] max-w-[1100px] mx-auto my-[20px]">Escalamos tu negocio de coaching/consultoría de manera predecible y sostenible en el tiempo.</h1>
					<p className="--sora text-center max-w-[930px] mx-auto text-[18px] lg:text-[22px] font-medium text-white/80">Creamos Sistemas validados y metodologías probadas para llegar a clientes premium en todo el mundo a través de las redes sociales.</p>
					<Cta/>
				</section>
			</div>
			<div className="relative">
				<MovingSpan />
				<a href="#vsl" className="absolute w-[100px] md:w-[142px] left-[calc(50%-50px)] md:left-[calc(50%-71px)] -bottom-[23px] md:-bottom-[33px] z-50">
					<img className="w-full h-full" src="/images/ms-deco-element-1.png" alt="Decoracion" />
				</a>
			</div>
		</div>
	)
}