export default function proceso() {

	type Step = {
		titulo: string,
		descripcion: string,
		imgUrl: string
	}

	const STEPS: Step[] = [
		{
			titulo: "1. Estudio de mercado y definición de cliente ideal",
			descripcion: "El primer paso va a ser empezar a trabajar hombro a hombro con vos para hacer un buen estudio de mercado, de toda tu competencia y entender y estudiar a tu cliente ideal, lo que va  a ser fundamental para armar una oferta irresistible.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "2. Oferta high ticket irresistible",
			descripcion: "Vamos a construir una “Grand Slam Offer” (oferta de MUY alto valor) basada en el cliente ideal que encontramos en el paso anterior para que tus Leads no te puedan decir que no.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "3. ofrecimiento masivo + optimización",
			descripcion: "Vamos a contactar a +3.200 personas CUALIFICADAS y además vamos a optimizar tu branding para que tus redes atraigan clientes de forma automática.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "4. Sistemas Creados, delegados y automatizados",
			descripcion: "Te vamos a conseguir +54 llamadas 1 a 1 con personas interesadas en tu oferta High Ticket para asegurar tus primeras ventas.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "5. Estructura de ventas, acompañamiento y módulos",
			descripcion: "Te vamos a enseñar nuestra estrategia de ventas 100% validada por nosotros y nuestros clientes. Además, expertos en closing van a analizar tus llamadas grabadas con vos, para que tu tasa de conversión sea de otro planeta. Y Te vamos a dar +10 modulos completos con lecciones e información sobre como cerrar llamadas de venta.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "6. Menos inversión de tiempo, más dinero",
			descripcion: "Vamos a crear un arco de operaciones y sistemas automatizados para que tu negocio haga la mayor cantidad de dinero posible, sin que te conviertas en esclavo de tu negocio.",
			imgUrl: "/images/azda-paso-3.webp"
		},
		{
			titulo: "7. Repetir hasta llegar a los usd7.500",
			descripcion: "Vamos a crear un arco de operaciones y sistemas automatizados para que tu negocio haga la mayor cantidad de dinero sin que te conviertas en esclavo de este. Y vamos a repetir este proceso de forma evolutiva para asegurarte resultados.",
			imgUrl: "/images/azda-paso-3.webp"
		},
	]

	return (
		<section id="proceso" className="backgroundColor py-[100px] relative overflow-clip">
			<div className="tc-container">
				<h2 className="max-w-[600px] mx-auto leading-[110%] text-center text-[42px] text-white font-extrabold mb-[30px]">
					tenemos una estrategia que te <span className="tcp-underline --4">asegura resultados</span>
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