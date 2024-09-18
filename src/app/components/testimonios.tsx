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
		  cita: "Me sorprendio mucho que vimos resultados en menos de dos semanas",
		  url: "https://www.youtube.com/embed/6PmB1lD5dBk?si=DgQfAvc8Uev3lw5z",
		  nombre: "Eva Maturano",
		  cargo: "Consultora De RRHH",
		},
		{
		  cita: "La estrella del servicio fue conseguirme lo que me habian prometido",
		  url: "https://www.youtube.com/embed/ype_mzfqOPg?si=3L0LwjXf5W9Msh_z",
		  nombre: "Ale Aguilar",
		  cargo: "coach ontológica",
		},
		{
		  cita: "Creo que no fue un gasto, fue una inversión de dinero",
		  url: "https://www.youtube.com/embed/pcWygL1eVlg?si=SN4MkbEVyqoBjVvz",
		  nombre: "Edgar Peña",
		  cargo: "Consultora De RRHH",
		},
	];

	return (
		<section id="testimonios" className="foregroundColor py-[100px] relative">
			<div className="testimonials-extra-shape"></div>
			<div className="max-w-[1200px] mx-auto px-4">
				<div className="flex gap-[7px] justify-center">
					<Star/>
					<Star/>
					<Star/>
					<Star/>
					<Star/>
				</div>
				<h2 className="text-center text-[42px] font-extrabold leading-[110%] max-w-[550px] mx-auto mt-[14px] mb-[60px]">Mira lo que tienen para decir <span className="tcp-underline --4">nuestros clientes</span></h2>
				{/* <p className="--sora mb-[35px] text-center max-w-[490px] mx-auto text-[22px] font-medium">Ellos ya saben como trabajamos... escucha lo que tienen para decir algunos de ellos.</p> */}
				<div className="grid grid-cols-2 gap-x-[40px] gap-y-[50px]">
					{
						TESTIMONIOS.map((testimonio) => {
							return (
								<div className="h-fit">
									<p className="font-semibold text-[24px] mb-[15px] text-center">
										"{testimonio.cita}"
									</p>
									<iframe 
										width="560" 
										height="315" 
										src={testimonio.url} 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							)
						})
					}
					<div className="block">
						<p className="font-semibold text-[24px] mb-[15px] text-center">
							"Yo tambien quiero empezar a facturar usd7.500, ¿Comó Hago?"
						</p>
						<a href="#calendlyDos" className="bg-[#ECE8FF] p-[39px] h-[315px] flex flex-col items-center justify-center">
							<h3 className="text-[26px] font-bold text-[#0F0248] leading-[110%] text-center">
								¡Hace <span className="underline">click acá</span> y agenda tu sesión gratuita, <span className="underline">Este puede ser tu lugar</span>!
							</h3>
							<p className="text-[18px] font-medium text-[#0F0248] text-center mt-[15px] leading-[110%]">Con solo dos clicks podes dar el primer paso hacia lo que muchos creen imposible.</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}