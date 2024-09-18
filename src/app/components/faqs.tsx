'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
			pregunta: "¿Cuánto tiempo tomará ver resultados con Azda?",
			respuesta: "Respuesta acá"
		},
		{
			pregunta: "¿Qué tipo de negocios pueden beneficiarse de sus servicios?",
			respuesta: "Respuesta acá"
		},
		{
			pregunta: "¿Qué incluye su oferta de servicios?",
			respuesta: "Respuesta acá"
		},
		{
			pregunta: "¿Cómo garantizan los resultados?",
			respuesta: "Respuesta acá"
		},
		{
			pregunta: "¿Qué diferencia a Azda de otras agencias?",
			respuesta: "Respuesta acá"
		},
		{
			pregunta: "¿Cuáles son los costos de sus servicios?",
			respuesta: "Respuesta acá"
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
		<section id="faqs" className="py-[100px]">
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
								<div className={`overflow-hidden duration-500 transition-all ${open === item.pregunta  ? 'max-h-[2000px]' : 'max-h-0'}`}>
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