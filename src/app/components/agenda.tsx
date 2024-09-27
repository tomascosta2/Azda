export default function Agenda () {
	return (
		<section id="calendlyDos" className="foregroundColor py-[60px] lg:py-[100px] px-4 relative">
			<div className="tc-container">
				<h2 className="max-w-[1000px] mx-auto leading-[110%] text-center text-[26px] md:text-[42px] text-white font-extrabold">Si estás cansado de no atraer nuevos clientes calificados cada mes y te sientes abrumado porque no sabes cómo hacerlo, te mostramos paso a paso cómo lograrlo sin estrés.</h2>
				<svg className="animate-bounce size-[40px] block mx-auto my-[20px] backgroundColor rounded-full p-[10px]" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"/></svg>
				<h3 className="w-fit mx-auto leading-[110%] text-center text-[30px] lg:text-[36px] text-white font-extrabold mb-[30px] lg:mb-0 underline">AGENDA TU SESIÓN DE <span>CONSULTORÍA GRATUITA</span></h3>
				<div className="flex flex-col-reverse md:flex-row justify-center gap-[40px] lg:pt-[50px]">
					<div className="w-[450px] max-w-full pt-[40px]">
						<h3 className="text-white font-bold text-[24px] uppercase leading-[110%]">¡Quiero lograr mis objetivos! <br/> ¿Como agendo mi asesoria?</h3>
						<ol className="text-white list-decimal list-inside font-semibold my-[30px]">
							<li>Selecciona un dia disponible en el calendario 👉</li>
							<li>Elegi un horario que tengas libre ⏰</li>
							<li>Completa con tus datos para que te podamos mandar el enlace 🔗</li>
						</ol>
						<p className="text-white text-[16px]">Y listo, diste el primer paso hacia tu meta. El dia de la llamada te va llegar un enlace a Meet por Correo y por Whatsapp.</p>
					</div>
					<div className="relative bg-white lg:px-[40px] lg:py-[20px] lg:rounded-[8px]">
						<div className="relative z-40 w-[450px] max-w-full calendly-inline-widget" data-url="https://calendly.com/-azda/corporation?hide_event_type_details=1&hide_gdpr_banner=1" style={{minWidth:'320px', height:'500px'}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}