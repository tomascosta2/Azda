import Script from "next/script";
import Check from "./svgs/check";
import BeneficiosPrincipales from "./beneficiosPrincipales";

export default function VslA() {
	return (
		<section id="vsl" className="relative z-40 mx-auto max-w-[1200px] pt-[100px] px-4 ">
			<div>
				<h2 className="text-center text-[30px] lg:text-[34px] font-extrabold leading-[110%] max-w-[900px] mx-auto mb-[40px]">TE CUENTO COMO VAMOS A LOGRARLO CON VOS</h2>
				<p className="text-center text-[22px] font-bold text-white relative z-50 mb-[30px]"><span className="text-shadow text-[26px]">Paso 1 de 2:</span> Mira Este Video</p>
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
			<BeneficiosPrincipales/>
			<div className="mt-[80px]">
				<p className="text-center text-[25px] font-bold text-white relative z-50"><span className="text-shadow text-[26px]">Paso 2 De 2:</span><br/><span>¡Agendá tu sesión de consultoria gratuita ahora!</span></p>
				<p className="text-center text-[16px] text-white/80 max-w-[600px] mx-auto">Tus respuestas serán completamente confidenciales y se utilizarán para preparar una estrategia para ti antes de la llamada.</p>
				<div className="relative h-[700px] mt-[30px] lg:-mt-[40px]">
					<div className="absolute z-20 size-[400px] left-[calc(50%-200px)] top-[calc(50%-200px)] foregroundColor blur-[140px]"></div>
					<div className="relative z-40 calendly-inline-widget" data-url="https://calendly.com/-azda/corporation?hide_gdpr_banner=1" style={{minWidth:'320px', height:'700px'}}></div>
				</div>
				<Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
			</div>
		</section>
	)
}