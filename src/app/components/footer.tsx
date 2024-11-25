import Logo from "./elements/logo";

export default function Footer() {
	return (
		<>
			<footer className="pt-[40px] px-4 relative foregroundColor">
				<div className="tc-container">
					<div className="flex gap-[20px] flex-wrap md:flex-nowrap items-center justify-center mb-[30px]">
						<div className="flex items-center flex-col w-[350px] text-[14px] text-white/80">
							<Logo/>
							<p className="mt-[12px] text-center">Azda Corporation, es tu aliado estratégico enfocado a impulsar tu negocio de Coaching o Consultoría hacia el éxito.</p>
						</div>
						{/* <div className="text-center normal-case">
							<div className="py-[12px] border-b border-white/40">
								<p>Vicente Calderon Syriani</p>
								<p className="text-[14px] mt-[6px]"><span>+54 9 2665 03-0164</span> - <span>vicentecasy@gmail.com</span></p>
							</div>
							<div className="py-[12px] border-b border-white/40">
								<p>Octavio Navarta Perassolo</p>
								<p className="text-[14px] mt-[6px]"><span>+54 9 2665 01-6691</span> - <span>octavionavarta@gmail.com</span></p>
							</div>
							<div className="py-[12px]">
								<p>Mateo Retamar Garcia</p>
								<p className="text-[14px] mt-[6px]"><span>+54 9 2664 79-2303</span> - <span>mateo27k4@gmail.com</span></p>
							</div>
						</div> */}
						{/* <p className="mt-[12px] text-center md:text-end normal-case w-[350px]">azdacorporation2024@gmail.com</p> */}
					</div>
				</div>
				<p className="text-white/80 text-[14px] text-center py-[10px]">©2024 Azda Corporation. Todos los derechos reservados.</p>
			</footer>
		</>
	)
}