import Script from "next/script";
import Header from "./header";
import Check from './svgs/check';

export default function HeroSection() {
	return (
		<div className="relative">
			<img className="absolute top-0 left-0 w-full h-auto" src="/images/azda-banner-bg.webp" alt="Azda" />
			<Header/>
			<section className="relative z-40 max-w-[1200px] mx-auto pt-[90px] px-4">
				<span className="block mx-auto --sora text-[22px] font-semibold text-center text-white/80">si te gustaría incrementar las ventas de tu negocio...</span>
				<h1 className="text-center text-[60px] font-extrabold leading-[110%] max-w-[950px] mx-auto my-[20px]">Transforma Tu Presencia Digital y Conquista Nuevos Mercados.</h1>
				<p className="--sora text-center max-w-[930px] mx-auto text-[22px] font-medium text-white/80">Transforma tu negocio con soluciones de marketing digital diseñadas para atraer clientes premium y expandirte globalmente.</p>
			</section>
		</div>
	)
}