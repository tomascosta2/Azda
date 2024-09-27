import Script from "next/script";
import Header from "./header";
import Check from './svgs/check';

export default function HeroSection() {
	return (
		<div className="relative px-4">
			<img className="absolute top-0 left-0 w-full h-auto" src="/images/azda-banner-bg.webp" alt="Azda" />
			<Header/>
			<section className="relative z-40 max-w-[1200px] mx-auto pt-[60px] lg:pt-[90px] px-4">
				<span className="block mx-auto --sora text-[18px] md:text-[22px] font-semibold text-center text-white/80">¡Atención Coaches/Consultores!</span>
				<h1 className="text-center text-[29px] md:text-[56px] tracking-tight font-extrabold leading-[110%] max-w-[1100px] mx-auto my-[20px]">Escalamos tu negocio a $7.500 USD implementando estrategias que ya han funcionado para más de 100 profesionales como tú.</h1>
				<p className="--sora text-center max-w-[930px] mx-auto text-[22px] font-medium text-white/80">Creamos Sistemas validados y metodologías probadas para llegar a clientes premium en todo el mundo a través de las redes sociales.</p>
			</section>
		</div>
	)
}