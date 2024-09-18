export default function Agenda () {
	return (
		<section className="foregroundColor py-[100px] relative">
			<div className="tc-container">
				<h2 className="max-w-[1000px] mx-auto leading-[110%] text-center text-[42px] text-white font-extrabold">Si quieres llegar a nuevos clientes todos los meses, aumentar tu facturación y por fin estar tranquilo sin depender de tu mercado cálido pero no sabes como...</h2>
				<svg className="animate-bounce size-[40px] block mx-auto my-[20px] backgroundColor rounded-full p-[10px]" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"/></svg>
				<h3 className="tcp-underline --4 w-fit mx-auto leading-[110%] text-center text-[36px] text-white font-extrabold">AGENDA TU SESIÓN DE CONSULTORÍA GRATUITA</h3>
				<div className="relative h-[700px]">
					<div className="absolute z-20 size-[400px] left-[calc(50%-200px)] top-[calc(50%-200px)] foregroundColor blur-[140px]"></div>
					<div className="relative z-40 calendly-inline-widget" data-url="https://calendly.com/-azda/corporation?hide_gdpr_banner=1" style={{minWidth:'320px', height:'700px'}}></div>
				</div>
			</div>
		</section>
	)
}