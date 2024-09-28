import Link from "next/link";
import Logo from "./elements/logo";

export default function Header() {
	return (
		<header className="relative z-40 max-w-[1200px] mx-auto px-4 pt-[5px] tcp-header">
			<div className="flex justify-center lg:justify-between items-center">
				<Logo/>
				<nav className="hidden lg:flex gap-[30px]">
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#testimonios">Testimonios</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#nosotros">Quienes Somos</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#proceso">Estrategia</Link>
					<Link className="text-[16px] font-medium text-[#F5F5F5]/80 hover:text-white transition-all" href="#faqs">Preguntas</Link>
				</nav>
			</div>
		</header>
	)
}