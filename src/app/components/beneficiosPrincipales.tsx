import Check from "./svgs/check";

export default function BeneficiosPrincipales() {
	return (
		<ul className="mt-[30px] flex flex-col gap-[14px] items-center lg:items-start lg:gap-0 lg:flex-row justify-between w-full md:px-[60px]">
			<li className="flex gap-[10px] items-center text-[20px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				7.500usd por mes
			</li>
			<li className="flex gap-[10px] items-center text-[20px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				Garantizado por contrato
			</li>
			<li className="flex gap-[10px] items-center text-[20px] font-medium">
				<div className="foregroundColor rounded-full flex items-center justify-center size-[35px]">
					<Check />
				</div>
				Sistemas listos para usar
			</li>
		</ul>
	)
}