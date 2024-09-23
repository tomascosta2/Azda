import Star from "./svgs/star";

export default function TestimoniosSection() {

	type Testimonio = {
		cita: string;
		url: string;
		nombre: string;
		cargo: string;
	};

	const TESTIMONIOS: Testimonio[] = [
		{
		  cita: "Me conectaron con +150 potenciales clientes interesados en mi servicio",
		  url: "https://fast.wistia.net/embed/iframe/omy7h0uw6u?seo=true&videoFoam=true",
		  nombre: "Edgar Peña",
		  cargo: "Consultora De RRHH",
		},
		{
		  cita: "Me sorprendio mucho que vimos resultados en menos de dos semanas",
		  url: "https://fast.wistia.net/embed/iframe/h60lkr4hab?seo=true&videoFoam=true",
		  nombre: "Eva Maturano",
		  cargo: "Consultora De RRHH",
		},
		{
		  cita: "Tenía todo pero necesitaba un surtidor de clientes y con ustedes lo logramos",
		  url: "https://fast.wistia.net/embed/iframe/9235nfzlfg?seo=true&videoFoam=true",
		  nombre: "Ale Aguilar",
		  cargo: "coach ontológica",
		},
	];

	return (
		<section id="testimonios" className="foregroundColor py-[60px] lg:py-[100px] relative">
			<div className="testimonials-extra-shape"></div>
			<div className="max-w-[1200px] mx-auto px-4">
				<div className="flex gap-[7px] justify-center">
					<Star/>
					<Star/>
					<Star/>
					<Star/>
					<Star/>
				</div>
				<h2 className="text-center text-[30px] lg:text-[42px] font-extrabold leading-[110%] max-w-[900px] mx-auto mt-[14px] mb-[10px]">Últimos casos de éxito</h2>
				<p className="--sora text-center max-w-[600px] mx-auto text-[18px] lg:text-[22px] font-medium mb-[60px]">Estos son algunos de nuestros casos de éxito, invirtieron con nosotros y escalamos su coaching/consultoría.</p>
				<div className="grid lg:grid-cols-2 gap-x-[40px] gap-y-[50px]">
					{
						TESTIMONIOS.map((testimonio) => {
							return (
								<div className="h-fit">
									<p className="font-semibold text-[20px] lg:text-[24px] mb-[15px] text-center">
										"{testimonio.cita}"
									</p>
									<iframe 										
										className="w-full aspect-video"
										src={testimonio.url}
										title={testimonio.nombre} 
										allow="autoplay; fullscreen" 
										frameBorder="0" 
										scrolling="no" 
										height="100%"
									></iframe>
								</div>
							)
						})
					}
					<div className="block">
						<p className="font-semibold text-[20px] lg:text-[24px] mb-[15px] text-center">
							"Yo también quiero empezar a ganar <br /> 7500 usd ¿Cómo hago?"
						</p>
						<a href="#calendlyDos" className="bg-[#0F0248] p-[39px] h-[315px] flex flex-col items-center justify-center">
							<h3 className="text-[32px] font-bold text-[#FFF] leading-[110%] text-center">
								¡Hace <span className="underline">click acá</span> y agenda tu sesión gratuita, Este puede ser tu lugar!
							</h3>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}