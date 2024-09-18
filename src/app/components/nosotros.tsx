export default function Nosotros() {
	return (
		<section className="foregroundColor py-[100px] relative overflow-clip">
			<div className="max-w-[1200px] mx-auto px-4">
				<div className="absolute -right-[200px] top-[calc(50%-331px)] size-[662px]">
					<img className="rotate-on-scroll" src="/images/rueda-nosotros.png" alt="Rueda" />
					<img className="z-30 absolute top-[37px] -left-[66px] w-[491px] h-[588px]" src="/images/fotos-y-logo-azda.png" alt="Nosotros Azda" />

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
				<div className="md:max-w-[50%] 2xl:max-w-[60%]">
					<h2 className="text-[42px] text-white font-extrabold mb-[30px]">¿por que azda?</h2>
					<p className="text-white font-medium text-[16px]">
						Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.  
						<br/><br/>
						En Azda, entendemos el poder del marketing digital para impulsar tu carrera o negocio. 
						<br/><br/>
						Te ayudamos a construir una marca sólida en línea, no solo a nivel local, sino también a expandirte globalmente. 
						<br/><br/>
						Esto no solo significa un mayor alcance y crecimiento, sino también la posibilidad de acceder a mercados internacionales con mayores ingresos.  
						<br/><br/>
						Nuestro enfoque es simple: acompañarte en tu "mudanza digital". Juntos, optimizaremos tu presencia en línea para atraer a clientes de alto valor y generar oportunidades de negocio que impulsen tu crecimiento tanto en cantidad como en calidad.  
						<br/><br/>						
						Las oportunidades en el mundo digital esperan por ti. Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos!
					</p>
				</div>
			</div>
		</section>
	)
}