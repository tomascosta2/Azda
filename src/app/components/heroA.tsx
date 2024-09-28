import Header from "./header";
import MovingSpan from "./movingSpan";
import Cta from './cta';
import BeneficiosPrincipales from "./beneficiosPrincipales";

export default function HeroSectionA() {
	return (
		<div className="relative">
			<Header/>
			<div className="h-full py-[60px] md:py-[80px] overflow-hidden">
				<img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/azda-banner-bg.webp" alt="Azda" />
				<section className="relative z-40 max-w-[1200px] mx-auto px-4">
					<span className="block mx-auto --sora text-[16px] md:text-[19px] font-medium text-center text-white/90">¿que tu facturación mensual sea variable no te deja estar tranquilo?</span>
					<h1 className="text-center text-[29px] md:text-[56px] xl:text-[58px] tracking-tight font-extrabold leading-[115%] max-w-[1100px] mx-auto my-[25px]">Escalamos tu negocio de coaching / consultoría de manera predecible y sostenible en el tiempo.</h1>
					<p className="text-center max-w-[760px] mx-auto text-[16px] md:text-[19px] font-medium text-white/80">Creamos Sistemas validados y metodologías probadas para llegar a <strong className="text-white/90">clientes premium en todo el mundo</strong> a través de las redes sociales.</p>
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