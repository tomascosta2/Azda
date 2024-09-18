import Script from "next/script";
import Check from "./svgs/check";

export default function Vsl() {
	return (
		<section className="relative z-40 mx-auto max-w-[1200px] pt-[60px]">
			<div>
				<p className="bg-[#2404B1] text-center p-[13px] text-[18px] font-bold text-white">PASO 1 de 2: Mira Este Video <span className="text-red-500">*</span></p>
				<div className="bg-gray-500 w-full aspect-video">	
					<iframe 										
						className="w-full h-full"
						src="https://fast.wistia.net/embed/iframe/fh7teh8h85?seo=true&videoFoam=true"
						title="De esta manera vamos a escalar tu coaching/consultoria. Video"
						allow="autoplay; fullscreen" 
						frameBorder="0" 
						scrolling="no" 
						height="100%"
					></iframe>
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
					Sistemas listos para usar
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
	)
}