import Script from "next/script";
import Header from "./header";
import Check from './svgs/check';

export default function HeroSection() {
	return (
		<div className="tcp-hero">
			<Header/>
			<section className="max-w-[1200px] mx-auto pt-[90px] pb-[100px] px-4">
				<span className="block mx-auto --sora text-[22px] font-semibold text-center">si te gustaría incrementar las ventas de tu negocio...</span>
				<h1 className="text-center text-[60px] font-extrabold leading-[110%] max-w-[950px] mx-auto my-[20px]">Transforma Tu Presencia Digital y Conquista Nuevos Mercados.</h1>
				<p className="--sora text-center max-w-[930px] mx-auto text-[22px] font-medium">Transforma tu negocio con soluciones de marketing digital diseñadas para atraer clientes premium y expandirte globalmente.</p>
				<div className="max-w-[1200px] mx-auto mt-[80px]">
					<p className="bg-[#2404B1] text-center p-[13px] text-[18px] font-bold text-white">PASO 1 de 2: Mira Este Video <span className="text-red-500">*</span></p>
					<div className="bg-gray-500 w-full aspect-video">
						<iframe className="w-full h-full" src="https://www.youtube.com/embed/2Q7R6ptTs3c?si=S4Lr8jR5TUv03TmN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
				</div>
				<ul className="mt-[30px] flex justify-between w-full md:px-[60px]">
					<li className="flex gap-[10px] items-center text-[20px] font-medium">
						<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
							<Check />
						</div>
						7.500usd por mes
					</li>
					<li className="flex gap-[10px] items-center text-[20px] font-medium">
						<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
							<Check />
						</div>
						Garantizado por contrato
					</li>
					<li className="flex gap-[10px] items-center text-[20px] font-medium">
						<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
							<Check />
						</div>
						Sistemas creados
					</li>
				</ul>
				<div className="mt-[80px]">
					<p className="text-center text-[22px] font-bold text-white relative z-50">PASO 2 de 2:<br/><span className="tcp-underline --2">Agendá tu sesión gratis ahora</span></p>
					<div className="relative h-[700px] lg:-mt-[40px]">
						<div className="absolute z-20 size-[400px] left-[calc(50%-200px)] top-[calc(50%-200px)] foregroundColor blur-[140px]"></div>
						<div className="relative z-40 calendly-inline-widget" data-url="https://calendly.com/-azda/corporation?hide_gdpr_banner=1" style={{minWidth:'320px', height:'700px'}}></div>
					</div>
					<Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
				</div>
			</section>
		</div>
	)
}