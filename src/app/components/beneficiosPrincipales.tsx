import Check from "./svgs/check";

export default function BeneficiosPrincipales() {
	return (
		<ul className="mt-[30px] flex flex-wrap flex-col items-start gap-x-[14px] gap-y-[30px] lg:items-center lg:gap-x-[25px] lg:flex-row justify-center w-full">
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center min-w-[35px] size-[35px]">
					<Check />
				</div>
				<p><strong>+54 llamadas calificadas con posibles clientes</strong></p>
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center min-w-[35px] size-[35px]">
					<Check />
				</div>
				<p><strong>Entrenamiento EXCLUSIVO en ventas</strong></p>
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center min-w-[35px] size-[35px]">
					<Check />
				</div>
				<p><strong>Acompañamiento 24/7</strong></p>
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center min-w-[35px] size-[35px]">
					<Check />
				</div>
				<p><strong>Comunidad con +300 coaches/consultores</strong></p>
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center min-w-[35px] size-[35px]">
					<Check />
				</div>
				<p><strong>+7500 USD Garantizados Por Contrato</strong></p>
			</li>
		</ul>
	)
}