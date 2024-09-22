'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
			pregunta: "¿Cómo lo hacen?",
			respuesta: "Con +2 años trabajando con coaches y consultores desarrollamos y validamos múltiples sistemas para lograr que nuestros clientes escalen su negocio de manera predecible y con estabilidad mes a mes, sin la incertidumbre de que tu facturación mensual sea variable."
		},
		{
			pregunta: "¿Es para mi si no cuento con mucho tiempo?",
			respuesta: "Si, con 10 horas semanales ya es suficiente, nuestro propósito es optimizar tu tiempo al máximo para que no seas esclavo del negocio. Con nuestros sistemas, metodologías y embudos vamos a hacerlo todo por vos para ahorrarte la mayor cantidad de tiempo."
		},
		{
			pregunta: "¿Qué pasa si no vendo High Ticket?",
			respuesta: "Tranquilo, de todas maneras aplicaremos una reestructuración de tu oferta basándonos en el principio de la “Grand Slam Offer” (Oferta irresistible) para que los potenciales clientes con quienes te conectemos se sientan estúpidos diciendo que no."
		},
		{
			pregunta: "¿Y si no soy experto en ventas online?",
			respuesta: "Justamente esto es algo muy común y por esto habrá un experto en cierre de ventas online acompañándote 1a1 durante todo el proceso, analizando tus llamadas, ayudándote con los seguimientos y tendrás llamadas de coaching para resolver todas tus dudas. Pero por sobre todas las cosas lo que logramos es acortar lo máximo posible tu curva de aprendizaje para ver los resultados lo antes posible."
		},
	
	]

	const toggle = (pregunta: string) => {
		if (open === pregunta) {
			setOpen(null)
		} else {
			setOpen(pregunta)
		}
	}

	return (
		<section id="faqs" className="py-[60px] lg:py-[100px] px-4">
			<div className="tc-container">
				<h2 className="mb-[40px] leading-[110%] text-center text-[42px] text-white font-extrabold">Preguntas Frecuentes</h2>
				<div className="max-w-[800px] mx-auto">
					{
						Preguntas.map((item) => (
							<div 
								key={item.pregunta}
								onClick={() => {toggle(item.pregunta)}}
								className="w-full cursor-pointer bg-primary p-[20px] rounded-[6px] border border-white/50 mb-[10px]"
							>
								<h3 className="--sora text-[16px] md:text-[18px] text-white lg:text-[20px] flex justify-between items-center">{item.pregunta}<svg className={`${open === item.pregunta ? 'rotate-45' : ''} min-w-[20px] size-[20px] transition-all duration-300`} fill="#FFF" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></h3>
								<div className={`normal-case overflow-hidden duration-500 transition-all ${open === item.pregunta  ? 'max-h-[2000px]' : 'max-h-0'}`}>
									<p className="text-white/80 text-[16px] pt-[10px]">{item.respuesta}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}