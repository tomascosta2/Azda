import Check from "./svgs/check";

export default function BeneficiosPrincipales() {
	return (
		<ul className="mt-[30px] flex flex-wrap flex-col items-start gap-x-[14px] gap-y-[30px] lg:items-center lg:gap-x-[25px] lg:flex-row justify-center w-full">
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				+54 llamadas calificadas con posibles clientes
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				<p>Entrenamiento <strong>EXCLUSIVO</strong> en ventas</p>
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				Acompañamiento 24/7
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				Comunidad de Coaches exclusiva
			</li>
			<li className="flex gap-[10px] items-center text-[18px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				+7500 USD Asegurados Por Contrato
			</li>
		</ul>
	)
}