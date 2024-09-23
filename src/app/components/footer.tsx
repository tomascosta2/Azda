import Logo from "./elements/logo";

export default function Footer() {
	return (
		<footer className="py-[40px] px-4 relative">
			<div className="tcp-footer-bg"></div>
			<div className="flex justify-center mb-[10px]">
				<Logo/>
			</div>
			<p className="text-white/80 font-medium text-center">©2024 Azda Corporation. Todos los derechos reservados.</p>
		</footer>
	)
}