export default function Agenda () {
	return (
		<section className="foregroundColor py-[100px] relative">
			<div className="tc-container">
				<h2 className="max-w-[1000px] mx-auto leading-[110%] text-center text-[42px] text-white font-extrabold">agenda tu sesión 100% gratis y sin compromiso para que veamos si sos un buen fit para el programa</h2>
				<div className="relative h-[700px]">
					<div className="absolute z-20 size-[400px] left-[calc(50%-200px)] top-[calc(50%-200px)] foregroundColor blur-[140px]"></div>
					<div className="relative z-40 calendly-inline-widget" data-url="https://calendly.com/-azda/corporation?hide_gdpr_banner=1" style={{minWidth:'320px', height:'700px'}}></div>
				</div>
			</div>
		</section>
	)
}