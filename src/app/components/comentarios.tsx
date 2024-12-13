import Star from "./svgs/star";

export default function Comentarios() {

	const COMENTARIOS = [
		{
			foto: 'https://media.licdn.com/dms/image/v2/D4D03AQEFlCrG2h6gSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724879383981?e=1739404800&v=beta&t=MhouF6JcpBr8P8_7ZE2cTYk_TPsVTDA8nsTGNMa-jBE',
			nombre: "Ayelen Ziegler",
			posicion: "Technical Recruiter Manager at Globty HR",
			fecha: "30 de octubre de 2024",
			comentario: "Lo que hacen los chicos en AZDA es magia. Súper recomendable. Gracias por ayudarnos a que nuestra empresa crezca. ¡Vamos por más!",
			enlace: 'https://www.linkedin.com/in/ayelenziegler/',
		},
		{
			foto: 'https://media.licdn.com/dms/image/v2/D5603AQHQNIz87wk3AA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725662253031?e=1739404800&v=beta&t=7gB5jyynDeuCGSLYhWPoTLQ2mkr-1LX-4cYH2gTxGms',
			nombre: "Alexsey Tejada",
			posicion: "Co-fundador Grupo C Asesores",
			fecha: "28 de octubre de 2024",
			comentario: "Muchas seriedad y compromiso en su trabajo. Su trabajo es de Alto Valor, conoce muy bien sobre el (su trabajo) y se prepara para aportar al crecimiento de sus clientes.",
			enlace: 'https://www.linkedin.com/in/alexsey-tejada-1168245a/',
		},
		{
			foto: 'https://media.licdn.com/dms/image/v2/D4D03AQEbK5RJJDkLaw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719609500663?e=1739404800&v=beta&t=KvNakoMEKXfaAfPpJvYwT4yUMUxno47zOl-vluq7PdQ',
			nombre: "Alejandra Aguilar",
			posicion: "Founder AVANZ + Coach de liderazgo",
			fecha: "18 de octubre de 2024",
			comentario: "Vicente está personalmente involucrado con el seguimiento y la obtención de resultados de sus clientes, te enseña todo lo referente a ventas y está siempre que lo necesitas. Mi proyecto creció muchísimo gracias a él y su equipo.",
			enlace: 'https://www.linkedin.com/in/alejandraaguilar/',
		},
		{
			foto: 'https://media.licdn.com/dms/image/v2/D4E03AQFIBOz7_ZJhTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723683008791?e=1739404800&v=beta&t=Ou_ng5yX_swpfDS_JjS9M6WQbX1lyVVl2iCKs_BINYM',
			nombre: "Carlos Fájer",
			posicion: "Socio Fundador de Fájer Romo Asociados",
			fecha: "17 de octubre de 2024",
			comentario: "Sus conocimientos, experiencia, actitud y metodología de trabajo hacen no solo agradable la relación profesional, sino también crea el contexto apropiado para desarrollar las competencias de la 'intervención' y caminar sin pausa en la dirección de conseguir los objetivos personales, profesionales y patrimoniales involucrados.",
			customClass: 'pb-[80px]',
			enlace: 'https://www.linkedin.com/in/carlosfajerc/',
		},
		{
			foto: 'https://media.licdn.com/dms/image/v2/D5603AQGOhIJu0Q5fmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719499646245?e=1739404800&v=beta&t=QO99upRBiW-M2prt6XJ2LoxnxdXEypAuwcWxMZuGkx0',
			nombre: "Julio Falces Delgado",
			posicion: "Coach Ejecutivo Certificado + Consultor de RR.HH.",
			fecha: "17 de octubre de 2024",
			comentario: "Son un equipo de gente que trabaja con rigor y dedicación comprometiéndose al máximo con su cliente para conseguir los resultados pactados.",
			customClass: 'pb-[80px]',
			enlace: 'https://www.linkedin.com/in/julioantoniofalces-hr/',
		}
	]

	return (
		<section className="py-[80px]">
			<div className="tc-container px-4">
				<h2 className="max-w-[1000px] mx-auto leading-[110%] text-center text-[32px] lg:text-[42px] text-white font-extrabold mb-[20px]">
					Más Testimonios
				</h2>
				<p className="--sora text-center max-w-[700px] mx-auto text-[18px] text-white/80 lg:text-[22px] font-medium mb-[60px]">Tu puedes ser el proximo...</p>
				<div className="md:columns-2 gap-4">
					{
						COMENTARIOS.map((comentario) => {
							return (
								<div className={`p-[45px] border border-white/30 rounded-[8px] bg-[#0A012D] mb-4 break-inside-avoid ${comentario.customClass}`}>
									<div className="flex gap-4">
										<img 
											className="bg-gray-900 rounded-full size-[60px]" 
											src={comentario.foto} 
											alt={comentario.nombre} 
										/>
										<div>
											<a href={comentario.enlace} target="_blank" className="text-white font-semibold text-[18px] underline">
												{comentario.nombre}
											</a>
											<p className="text-white/70">
												{comentario.posicion}
											</p>
										</div>
									</div>
									<div className="flex justify-start items-center gap-4 mt-4">
										<div className="flex gap-[7px] w-[120px]">
											<Star />
											<Star />
											<Star />
											<Star />
											<Star />
										</div>
										<p className="text-white/70 normal-case">
											{comentario.fecha}
										</p>
									</div>
									<p className="mt-4 text-white/90 normal-case">
										{comentario.comentario}
									</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}