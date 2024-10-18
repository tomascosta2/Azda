import Logo from "./elements/logo";

export default function Footer() {
	return (
		<footer className="py-[40px] px-4 relative">
			<div className="tc-container">
				<div className="tcp-footer-bg"></div>
				<div className="flex flex-col justify-between mb-[30px]">
					<div className="flex justify-center mb-[10px]">
						<Logo/>
					</div>
					<div className="text-center normal-case mt-[20px]">
						<p className="font-bold mb-[12px]">Información de contacto:</p>
						<p><span>Vicente Calderon Syriani</span> - <span>+54 9 2665 03-0164</span> - <span>vicentecasy@gmail.com</span></p>
						<p><span>Octavio Navarta Perassolo</span> - <span>+54 9 2665 01-6691</span> - <span>octavionavarta@gmail.com</span></p>
						<p><span>Mateo Retamar Garcia</span> - <span>+54 9 2664 79-2303</span> - <span>mateo27k4@gmail.com</span></p>
						<p className="mt-[12px]">azdacorporation2024@gmail.com</p>
					</div>
				</div>
				<p className="text-white/80 font-medium text-center">©2024 Azda Corporation. Todos los derechos reservados.</p>
			</div>
		</footer>
	)
}