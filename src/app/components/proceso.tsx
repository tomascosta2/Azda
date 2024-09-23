export default function proceso() {

	type Step = {
		titulo: string,
		descripcion: string,
		imgUrl: string,
		aclaracion: string
	}

	const STEPS: Step[] = [
		{
			titulo: "1. Estudio de mercado y de tu cliente ideal",
			descripcion: "Nos pondremos a trabajar hombro a hombro con vos y haremos un profundo estudio de mercado, donde obtendremos claridad tanto de tu servicio como de tu cliente.",
			imgUrl: "/images/azda-paso-1.png",
			aclaracion: ""
		},
		{
			titulo: "2. Crearemos tu oferta irresistible",
			descripcion: "Construiremos una oferta high ticket tan buena que haga que la gente se sienta estúpida diciéndonos que NO.",
			imgUrl: "/images/azda-paso-2.jpg",
			aclaracion: ""
		},
		{
			titulo: "3. Embudo de prospección y contenido",
			descripcion: "Aplicaremos nuestra metodología validada para ofrecerle tu servicio a mínimo 2.400 personas pre-calificadas que sean tu cliente ideal, optimizando tu branding y creando un sistema de prospección y contenido para que tus redes sociales atraigan clientes en automático a diario y todo esto sin que hagas nada.",
			imgUrl: "/images/azda-paso-3.jpg",
			aclaracion: "/images/aclaracion-paso-3.png"
		},
		{
			titulo: "4. Reuniones de venta 1a1 con potenciales clientes",
			descripcion: "Vamos a buscar, filtrar, calificar, nutrir y redirigir a mínimo 54 potenciales clientes interesados en tu servicio a una llamada de venta contigo, y si, esto también lo hacemos por ti para que no te quedes sin tiempo.",
			imgUrl: "/images/azda-paso-4.jpg",
			aclaracion: ""
		},
		{
			titulo: "5. Maestría en cierre de ventas",
			descripcion: 'Te enseñaremos nuestra estructura de ventas "paso a paso" probada (la misma que llevó a nuestros clientes a escalar su negocio), tendrás acompañamiento 1a1, análisis de llamadas reales y contenido pregrabado para lograr cerrar a esos clientes potenciales que necesitan tu servicio.',
			imgUrl: "/images/azda-paso-5.jpg",
			aclaracion: ""
		},
		{
			titulo: "6. Arco de operaciones",
			descripcion: "Crearemos las operaciones y los sistemas necesarios para que tu negocio funcione invirtiendo la menor cantidad de tu tiempo posible.",
			imgUrl: "/images/azda-paso-6.jpg",
			aclaracion: ""
		},
		{
			titulo: "7. Escalar y repetir el proceso cada mes",
			descripcion: "Por último repetiremos el ciclo de ventas hasta agregar 7,500 USD extra en tu facturación y hacerlo de manera predecible y sostenible en el tiempo.",
			imgUrl: "/images/azda-paso-7.jpg",
			aclaracion: ""
		},
	]

	return (
		<section id="proceso" className="backgroundColor py-[60px] lg:py-[100px] px-4 relative overflow-clip">
			<div className="tc-container">
				<h2 className="max-w-[900px] mx-auto leading-[110%] text-center text-[30px] lg:text-[42px] text-white font-extrabold mb-[20px]">
					Nuestro Paso a paso para escalar tu negocio
				</h2>
				<p className="--sora text-center max-w-[700px] mx-auto text-[18px] text-white/80 lg:text-[22px] font-medium mb-[60px]">Creamos el sistema perfecto para que puedas estar tranquilo consiguiendo nuevos clientes premium todos los meses.</p>
				<div className="max-w-[1000px] mx-auto mt-[60px]">
					{
						STEPS.map((step, i) => {
							console.log(i);
							return (
								<div className="grid lg:grid-cols-2 gap-[20px] lg:gap-[35px] mb-[50px] last:mb-0 lg:h-[250px]">
									<div className={`max-w-[500px] mx-auto flex flex-col justify-center ${i % 2 === 0 ? 'appear-from-left' : 'appear-from-right'}`}>
										<h3 className="font-bold text-[24px] text-[#FFF] mb-[10px] text-balance">{step.titulo}</h3>
										<p className="text-[16px] normal-case text-white/80">{step.descripcion}</p>
									</div>
									<div className={`max-w-[500px] mx-auto w-full h-full ${i % 2 === 0 ? 'appear-from-right -order-1 lg:order-2' : 'appear-from-left -order-1'}`} >
										{
											step.aclaracion ? (
												<img className="absolute -top-[35px] md:-top-[45px] -right-[20px] md:-right-[100px] max-w-[230px] h-auto" src={step.aclaracion} alt="Aclaracion de paso" />
											) : ''
										}
										<img 
											className="rounded-[8px]"
											src={step.imgUrl} 
											alt="Definición de Metas" 
										/>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}