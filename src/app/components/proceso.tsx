export default function proceso() {
	return (
		<section className="backgroundColor py-[100px] relative overflow-clip">
			<div className="tc-container">
				<h2 className="max-w-[600px] mx-auto leading-[110%] text-center text-[42px] text-white font-extrabold mb-[30px]">
					tenemos una estrategia que te <span className="tcp-underline --4">asegura resultados</span>
				</h2>
				<div className="max-w-[1000px] mx-auto mt-[60px]">
					<div className="grid md:grid-cols-2 gap-[35px] mb-[45px] md:h-[250px]">
						<div className="appear-from-left">
							<h3 className="font-semibold text-[24px] text-[#FFF] mb-[10px]">1. Llamada para <span className="underline">definición de objetivos</span></h3>
							<p className="text-[18px] text-white/80">Una vez hecho el primer pago, vamos a cordinar una llamada En la que vamos a definir objetivos, tiempos y te voy a mostrar los primeros avances del diseño que arme segun tu nicho y tu branding. Segun esto voy a terminar el diseño.</p>
						</div>
						<img className="w-full h-full appear-from-right rounded-[8px] -order-1 lg:order-2" src="/images/paso-1.webp" alt="Definición de Metas" />
					</div>
					<div className="grid md:grid-cols-2 gap-[35px] mb-[45px] md:h-[250px]">
						<img className="w-full h-full appear-from-left rounded-[8px]" src="/images/paso-2.webp" alt="Aprobación de diseño" />
						<div className="appear-from-right">
							<h3 className="font-semibold text-[24px] text-[#FFF] mb-[10px]">2. <span className="underline">Definición de Diseño</span></h3>
							<p className="text-[18px] text-white/80">Aproximadamente 2 dias despues de la primera llamada te voy a enviar el diseño terminado para que me comentes que te parece y si hay algun ajuste que te gustaria hacer. Si el diseño no te gusta te reintegro el 100% del pago realizado.</p>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-[35px] mb-[45px] md:h-[250px]">
						<div className="appear-from-left">
							<h3 className="font-semibold text-[24px] text-[#FFF] mb-[10px]">3. Lanzamiento de <span className="underline">prueba</span></h3>
							<p className="text-[18px] text-white/80">4 dias despues de la definicion del diseño el sitio ya va  a estar listo para ser lanzado. Pero antes de lanzarlo te voy a enviar un enlace privado para que revisemos que todo este en orden antes del lanzamiento.</p>
						</div>
						<img className="w-full h-full appear-from-right rounded-[8px] -order-1 lg:order-2" src="/images/paso-3.webp" alt="Lanzamiento de Testing" />
					</div>
					<div className="grid md:grid-cols-2 gap-[35px] mb-[45px] md:h-[250px]">
						<img className="w-full h-full appear-from-left rounded-[8px]"  src="/images/paso-4.webp" alt="Sitio Lanzado con exito" />
						<div className="appear-from-right">
							<h3 className="font-semibold text-[24px] text-[#FFF] mb-[10px]">4. Ya tenes tu <span className="underline">Landing Page</span> </h3>
							<p className="text-[18px] text-white/80">Voy a corregir cualquier detalle que hayamos encontrado en la prueba y lanzar el sitio para que puedas empezar a disfrutar de la tranquilidad de que aumentaste la probabilidad de que cada usuario que envias a tu página te compre.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}