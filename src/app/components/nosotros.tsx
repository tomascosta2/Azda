import Linkedin from "./svgs/linkedin";

export default function Nosotros() {
	return (
		<section id="nosotros" className="foregroundColor py-[60px] lg:py-[100px] px-4 relative overflow-clip">
			<div className="max-w-[1200px] mx-auto px-4">
				<div className="hidden lg:block absolute -right-[300px] xl:-right-[200px] top-[calc(50%-331px)] size-[662px]">
					{/* Enlaces a Linkedin */}
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] rounded-full absolute top-[40px] left-[50px]" 
						href="https://wa.me/+542665030556?text=Hola%2C%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20puedo%20aumentar%20mi%20facturaci%C3%B3n%20con%20sus%20servicios.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20agendar%20una%20llamada%3F"
						target="_blank"
					><Linkedin/></a>
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] rounded-full absolute top-[250px] -left-[66px]" 
						href="https://www.linkedin.com/in/octavio-navarta/"
						target="_blank"
					><Linkedin/></a>
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] rounded-full absolute bottom-[35px] left-[50px]" 
						href="https://www.linkedin.com/in/mateo-retamar-453104269/"
						target="_blank"
					><Linkedin/></a>
					{/* Rueda */}
					<img className="rotate-on-scroll" src="/images/rueda-nosotros.png" alt="Rueda" />
					{/* Fotos Chicos */}
					<img className="z-30 absolute top-[37px] -left-[66px] w-[491px] h-[588px]" src="/images/fotos-y-logo-azda.png" alt="Nosotros Azda" />

					{/* Lineas Con Animacion */}
					<div className="absolute left-0 overflow-clip top-[calc(50%)]">
						<div className="translate-x-on-scroll -left-[500px] z-20 nosotros-dashed h-[2.2px] w-[1500px]"></div>
					</div>
					<div className="rotate-[45deg] absolute w-[300px] overflow-clip top-[250px] left-[120px]">
						<div className="translate-x-on-scroll -left-[500px] z-20 nosotros-dashed h-[2.2px] w-[1500px]"></div>
					</div>
					<div className="-rotate-[45deg] absolute w-[300px] overflow-clip bottom-[250px] left-[120px]">
						<div className="translate-x-on-scroll -left-[500px] z-20 nosotros-dashed h-[2.2px] w-[1500px]"></div>
					</div>
				</div>
				<div className="relative block lg:hidden mb-[20px]">
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] scale-75 rounded-full absolute top-[30px] -right-[14px]" 
						href="https://wa.me/+542665030556?text=Hola%2C%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20puedo%20aumentar%20mi%20facturaci%C3%B3n%20con%20sus%20servicios.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20agendar%20una%20llamada%3F"
						target="_blank"
					><Linkedin/></a>
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] scale-75 rounded-full absolute -top-[25px] left-[50%]" 
						href="https://www.linkedin.com/in/octavio-navarta/"
						target="_blank"
					><Linkedin/></a>
					<a 
						className="z-50 flex items-center justify-center bg-[#0F0248] size-[55px] scale-75 rounded-full absolute top-[30px] -left-[14px]" 
						href="https://www.linkedin.com/in/mateo-retamar-453104269/"
						target="_blank"
					><Linkedin/></a>
					<img className="relative z-40" src="/images/fotos-y-logo-azda-mobile.webp" alt="Rueda Nosotros" />
					<img className="absolute bottom-0 left-0 rotate-on-scroll" src="/images/rueda-azda-mobile.webp" alt="Rueda Nosotros" />
				</div>
				<div className="lg:max-w-[50%] 2xl:max-w-[60%]">
					<h2 className="text-[26px] lg:text-[42px] text-white leading-[120%] font-extrabold mb-[30px]">¿Qué es Azda Corporation y quiénes somos?</h2>
					<p className="normal-case text-white/80 font-medium text-[16px] text-justify">
						Azda Corporation, es tu aliado estratégico enfocado a impulsar <strong className="text-white">tu negocio de Coaching o Consultoría hacia el éxito</strong>. Nuestra misión es clara: proporcionarte la información, sistemas, equipo y el expertise necesarios para alcanzar tus metas.
						<br /><br />
						Fundada por Vicente Calderón, Mateo Retamar y Octavio Navarta, <strong className="text-white">tres jóvenes fanáticos del marketing digital y la creación de sistemas constantes</strong>.
						<br /><br />
						Somos expertos en soluciones digitales a medida para el mercado de Coaching y Consultores. Con un <strong className="text-white">equipo de profesionales apasionados</strong>, diseñamos embudos de adquisición de clientes altamente efectivos y estrategias de posicionamiento de marca que <strong className="text-white">te convertirán en un referente en tu rubro</strong>.
						<br /><br />
						<strong className="text-white">No somos simplemente un proveedor de servicios, sino tus socios en el crecimiento.</strong>
						<br /><br />
						Priorizamos la personalización y nos aseguramos de que cada socio con el que trabajemos obtenga <strong className="text-white">resultados óptimos y eficientes</strong>.
					</p>
				</div>
			</div>
		</section>
	)
}