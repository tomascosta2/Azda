export default function proceso() {

	type Step = {
		titulo: string,
		descripcion: string,
		imgUrl: string
	}

	const STEPS: Step[] = [
		{
			titulo: "1. Estudio de mercado y de tu cliente ideal",
			descripcion: "Nos pondremos a trabajar hombro a hombro con vos y haremos un profundo estudio de mercado, donde obtendremos claridad tanto de tu servicio como de tu cliente.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "2. Crearemos tu oferta irresistible",
			descripcion: "Construiremos una oferta high ticket tan buena que haga que la gente se sienta estúpida diciéndonos que NO.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "3. Embudo de prospección y contenido",
			descripcion: "Aplicaremos nuestra metodología validada para ofrecerle tu servicio a mínimo 2.400 personas pre-calificadas que sean tu cliente ideal, optimizando tu branding y creando un sistema de prospección y contenido para que tus redes sociales atraigan clientes en automático a diario y todo esto sin que hagas nada.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "4. Reuniones de venta 1a1 con potenciales clientes",
			descripcion: "Vamos a buscar, filtrar, calificar, nutrir y redirigir a mínimo 54 potenciales clientes interesados en tu servicio a una llamada de venta contigo, y si, esto también lo hacemos por ti para que no te quedes sin tiempo.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "5. Maestría en cierre de ventas",
			descripcion: 'Te enseñaremos nuestra estructura de ventas "paso a paso" probada (la misma que llevó a nuestros clientes a escalar su negocio), tendrás acompañamiento 1a1, análisis de llamadas reales y contenido pregrabado para lograr cerrar a esos clientes potenciales que necesitan tu servicio.',
			imgUrl: "/images/azda-paso-3.webp",
		},
		{
			titulo: "6. Arco de operaciones",
			descripcion: "Crearemos las operaciones y los sistemas necesarios para que tu negocio funcione invirtiendo la menor cantidad de tu tiempo posible.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "7. Escalar y repetir",
			descripcion: "Por último repetiremos el ciclo de ventas hasta agregar 7,500 USD extra en tu facturación y hacerlo de manera predecible y sostenible en el tiempo.",
			imgUrl: "/images/azda-paso-3.webp"
		},
	]

	return (
		<section id="proceso" className="backgroundColor py-[100px] relative overflow-clip">
			<div className="tc-container">
				<h2 className="max-w-[900px] mx-auto leading-[110%] text-center text-[42px] text-white font-extrabold mb-[30px]">
					La estrategia que usamos para escalar el negocio de todos nuestros clientes
				</h2>
				<div className="max-w-[1000px] mx-auto mt-[60px]">
					{
						STEPS.map((step, i) => {
							console.log(i);
							return (
								<div className="grid md:grid-cols-2 gap-[35px] mb-[45px] last:mb-0 md:h-[250px]">
									<div className={`flex flex-col justify-center ${i % 2 === 0 ? 'appear-from-left' : 'appear-from-right'}`}>
										<h3 className="font-semibold text-[24px] text-[#FFF] mb-[10px]">{step.titulo}</h3>
										<p className="text-[16px] text-white/80">{step.descripcion}</p>
									</div>
									<img 
										className={`w-full h-full rounded-[8px] ${i % 2 === 0 ? 'appear-from-right -order-1 lg:order-2' : 'appear-from-left -order-1'}`} 
										src={step.imgUrl} 
										alt="Definición de Metas" 
									/>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}